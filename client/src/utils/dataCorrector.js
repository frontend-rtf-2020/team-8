export const takeDateFrom = (date) => {
    if (date)
        return date.substr(0, date.indexOf('T'));
}