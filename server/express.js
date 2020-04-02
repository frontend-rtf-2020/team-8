import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import path from 'path'

//Требуются для визуализации компонентов React и использования renderToString:
import React from 'react'
import ReactDOMServer from 'react-dom/server'

/*
Модули маршрутизатора: StaticRouter - это маршрутизатор без сохранения состояния, 
который принимает запрошенный URL-адрес для соответствия маршруту внешнего интерфейса и компоненту MainRouter,
который является корневым компонентом нашего внешнего интерфейса.
*/
import StaticRouter from 'react-router-dom/StaticRouter'
import MainRouter from './../client/MainRouter'

//закоментить при продакшене 
import devBundle from './devBundle'

import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

if (process.env.NODE_ENV === "development") {
//закомментировать перед сборкой для production
  devBundle.compile(app)
}


//парскер body параметров и передача в req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(compress())
//защищать приложения, устанавливая различные заголовки HTTP
app.use(helmet())
//включить CORS - обмен ресурсами между источниками
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use('/', userRoutes)
app.use('/', authRoutes)

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
  res.status(401).json({"error" : err.name + ": " + err.message})
  }
 }) 

app.get('*', (req, res) => {
  const context = {} 
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <MainRouter/>
    </StaticRouter>
  ) 

  if (context.url) {
    return res.redirect(303, context.url)
  }
  res.status(200).send(Template({
    markup: markup,
  }))
})


export default app