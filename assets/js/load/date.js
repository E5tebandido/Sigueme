var dateGenerator = () => {
    let today = new Date()
    let actualmonth = today.getMonth() + 1
    return  today.getFullYear() + "/" + 
            actualmonth + "/" + 
            today.getDate() + "   "        
}

var hourGenerator = () => {
    let today = new Date()
    return  today.getHours() + ":" + 
            today.getMinutes() + ":" + 
            today.getSeconds()  
}