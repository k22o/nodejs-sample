const request = require('request');
const logger = require('../middleware/logger').console;

exports.httpRequest = async function (options) {

    return new Promise((resolve, reject) => {
        request(options, function (error, response, data) {

            if(error) {
                reject(error);
            }
            else {
                let result = {           
                    headers: response.headers,
                    result: data,
                    status: response.statusCode
                };
                resolve(result);
            }
        });
    });
}