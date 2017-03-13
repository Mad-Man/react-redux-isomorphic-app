import {
    Server
} from 'http'
import Express from 'express'
import path from 'path'
import compression from 'compression'
//handlers
import htmlHandler from './server/handlers/html'
import apiItemsHandler from './server/handlers/api-items'
import apiItemDetailHandler from './server/handlers/api-item-detail'
//constants
import Constants from './server/server-constants'
import cliColor from 'cli-color';

const app = new Express();
const root = path.join(__dirname, Constants.ROOT_PATH);
const dist = path.join(root, Constants.DIST_PATH);
const serverDir = path.join(__dirname, Constants.SERVER_PATH);

app.set('view engine', Constants.VIEW_ENGINE_TYPE)
    //view templates
    .set('views', path.join(serverDir, 'views'))
    // static assets folder
    .use(compression())
    .use('/dist', Express.static(dist))
    // routes #move to file/folder
    .get("/api/items", apiItemsHandler)
    .get("/api/items/:id", apiItemDetailHandler)
    .get('*', htmlHandler);

if (require.main === module) {
    var server = new Server(app);
    server.listen(process.env.PORT || Constants.DEFAULT_PORT, () => {
        console.log(cliColor.cyan(Constants.SERVER_LISTENING_MESSAGE), server.address());
    });
}