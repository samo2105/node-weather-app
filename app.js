const argv = require('./config/yargs').argv;
const {getInfo} = require('./place/getInfo')

getInfo(argv.direccion)
    .then(console.log)



