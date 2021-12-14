const log4js = require('log4js');
const loggerConfig = require('../config/loggerConfig');

log4js.configure(loggerConfig);
const console = log4js.getLogger();

module.exports = {
    console
};
