import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import path from 'path'

//закоментить при продакшене 
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

//закомментировать перед сборкой для production
devBundle.compile(app)

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//парскер body параметров и передача в req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
//защищать приложения, устанавливая различные заголовки HTTP
app.use(helmet())
//включить CORS - обмен ресурсами между источниками
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send(Template())
})

export default app