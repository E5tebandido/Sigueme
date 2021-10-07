var idGenerator = () => {
    let token = Math.random().toString(36).slice(2)
    let today = new Date()
    let actualmonth = today.getMonth() + 1
    return  today.getFullYear() + "" + 
            actualmonth + "" + 
            today.getDate() + "" + 
            today.getHours() + "" + 
            today.getMinutes() + "" + 
            today.getSeconds() + "" + 
            today.getMilliseconds() + "" + 
            token 
}

