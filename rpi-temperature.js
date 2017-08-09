const fs = require('fs')
const path = require('path')

exports.getTemperature = function (){
    var srcpath = '/sys/bus/w1/devices'
    var directories = fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isSymbolicLink())

    for(i=0; i<directories.length;i++){
        if(directories[i].startsWith('28')){
            srcpath = srcpath + '/' + directories[i] + '/w1_slave'
        }
    }
    var content = fs.readFileSync(srcpath).toString();
    var subString = content.substring(content.indexOf('t=') + 2).trim();
    var value = parseInt(subString) / 1000;

    return value
}
