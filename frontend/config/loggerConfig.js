const path = require('path');
const ROOT = path.join(__dirname, '../');

module.exports = {
    appenders: {
        ConsoleLogAppender: {
            type: "console"
        }
    },
    categories: {
        "default": {
            appenders: ["ConsoleLogAppender"],
            level: "ALL"
        }
    }
}