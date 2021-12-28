const httpRequest = require('./httpRequest');
const {baseApiUrl} = require('../config/connectionConfig');
const logger = require('../middleware/logger').console;

const header = {
    'Content-type': 'application/json'
}

exports.find = async function() {
    logger.info("dao-find")
    let url = baseApiUrl + 'member';
    let options = {
        url: url,
        method: 'GET', 
        headers: header,
        followAllRedirects: true
    }

    let result = await httpRequest.httpRequest(options);
    return result.result;
}

exports.add = async function(data) {
    logger.info("dao-add")
    let url = baseApiUrl + 'member';
    let options = {
        url: url,
        method: 'POST', 
        headers: header,
        followAllRedirects: true, 
        json: data
    }

    let result = await httpRequest.httpRequest(options);
}

exports.edit = async function(id, data) {
    logger.info("dao-edit")
    let url = baseApiUrl + 'member/' + id + '?name=' + data.name;
    let options = {
        url: url,
        method: 'PATCH', 
        headers: header,
        followAllRedirects: true, 
    }
    let result = await httpRequest.httpRequest(options);
}

exports.delete = async function(id) {
    logger.info("dao-delete")
    let url = baseApiUrl + 'member/' + id;
    let options = {
        url: url,
        method: 'DELETE', 
        headers: header,
        followAllRedirects: true, 
    }
    let result = await httpRequest.httpRequest(options);
}

