var dateGenerator = () => {
    let today = new Date()
    let actualmonth = today.getMonth() + 1
    return  today.getFullYear() + "/" + 
            actualmonth + "/" + 
            today.getDate() + "   " +
            today.getHours() + ":" + 
            today.getMinutes() + ":" + 
            today.getSeconds()  
}