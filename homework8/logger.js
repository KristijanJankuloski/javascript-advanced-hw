const fs = require('fs');

function addTextLog(logMessage){
    if(!logMessage){
        return "No message present";
    }
    const logTime = new Date();
    let logEntry = `${logTime.toLocaleString('en-GB')} ==> ${logMessage}\n`;
    fs.appendFile('./log.txt', logEntry, err => {
        if(err){
            console.error(err);
        }
    })
}

module.exports = {
    log: addTextLog
}