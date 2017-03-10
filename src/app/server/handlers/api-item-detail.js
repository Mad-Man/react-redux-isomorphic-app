import ItemDetails from '../models/item-detail'
import request from 'request'
import Constants from '../server-constants'

module.exports = (req, res) => {
    const itemId = req.params.id;
    const uri = Constants.DEATAILS_API_URI(req.params.id);
    console.log(Constants.API_DETAILS_CONNECTION_MESSAGE, req.method, uri, res.statusCode);
    request({
        url: uri
    }, (err, response, body) => {
        if (err) {
            console.log(err);
            response.status(500).send({
                error: Constants.FATAL_ERROR_MESSAGE
            })
            return;
        }
        const itemDetails = JSON.parse(body);
        request({
            url: Constants.DEATAILS_API_URI(req.params.id) + Constants.DEATAILS_API_URI_DESC
        }, (err, response, body) => {
            const itemDescription = JSON.parse(body);
            res.send(new ItemDetails({
                item: itemDetails,
                description: itemDescription
            }).getDetailItem());
        })
    });
}