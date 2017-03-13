import List from '../models/items'
import request from 'request'
import Constants from '../server-constants'
import cliColor from 'cli-color'

module.exports = (req, res) => {
    let uri = Constants.LIST_API_URI(req.query.q);
    if (req.query && req.query.q) {
        request({
            url: uri
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                res.status(500).send({
                    error: Constants.FATAL_ERROR_MESSAGE
                })
                return;
            }
            let responseBody = JSON.parse(body);
            //responseBody
            res.send(new List(responseBody).getList());
            let statusColor = response.statusCode === 200 ? 'cyan' : 'red';
            console.log(
                cliColor[statusColor](Constants.API_CONNECTION_MESSAGE),
                req.method,
                uri,
                response.statusCode
            );
        });
    }
}