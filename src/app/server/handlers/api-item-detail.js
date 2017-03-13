import ItemDetails from '../models/item-detail'
import request from 'request'
import Constants from '../server-constants'
import cliColor from 'cli-color'
import { store } from '../../store/store'

module.exports = (req, res) => {
    let uri = Constants.DEATAILS_API_URI(req.params.id);
    request({
        url: uri
    }, detailHandLer(req, res, uri));
}

const detailHandLer = (req, res, uri) => (err, response, body) => {
    if (response.statusCode !== 200 || err) {
        return res.status(response.statusCode).send({
            error: err
        });
    }
    const itemDetails = JSON.parse(body);
    let statusColor = response.statusCode === 200 ? 'green' : 'red';
    console.log(
        cliColor[statusColor](Constants.API_DETAILS_CONNECTION_MESSAGE),
        req.method, uri, response.statusCode
    );
    if (response.statusCode === 200) {

        request({
            url: Constants.DEATAILS_API_URI(req.params.id) + Constants.DEATAILS_API_URI_DESC
        }, detailDescriptionHandLer(itemDetails, res));
    }
}
const detailDescriptionHandLer = (itemDetails, res) => (err, response, body) => {
     if (response.statusCode !== 200 || err) {
        return res.status(response.statusCode).send({
            error: err
        });
    }
    if (response.statusCode === 200) {
        res.send(new ItemDetails({
            item: itemDetails,
            description: JSON.parse(body)
        }).getDetailItem());
    }
}