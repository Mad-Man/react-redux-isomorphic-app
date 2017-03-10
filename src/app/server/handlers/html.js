import { match } from 'react-router'
import { store } from '../../store/store'
import routes from '../../routes/routes';
import React from 'react';
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { NotFound } from '../../components/not-found'
import Constants from '../server-constants'

module.exports = (req, res) => {
    const reqUri = req.protocol + '://' + req.get('host');
    const newStore = store();
    match({ routes, location: req.url },
        (err, redirectLocation, renderProps) => {
            let components = renderProps.components
                .map(component => component.WrappedComponent ? component.WrappedComponent : component)
                .filter(component => component.fetchData);
            let componentsPromises = components.map(component => component.fetchData(newStore, renderProps, reqUri));
            if (err) {
                return res.status(500).send(err.message);
            }
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            if (componentsPromises && typeof componentsPromises === Constants.OBJECT_TYPE) {
                Promise.all(componentsPromises)
                    .then((responses) => {
                        responses.forEach((response) => {
                            renderHtml(response, res, newStore, renderProps);
                        })
                    })
            }
        });
}

/**
 * Creates html to add into the template and passes the store state to the client app 
 * Denpending on the type of req notify redux that req state
 */
function renderHtml(response, res, newStore, renderProps) {
    let type = response.data && response.data.items ?
        Constants.REQ_LIST_ACTION_TYPE :
        Constants.REQ_DETAIL_ACTION_TYPE
    newStore.dispatch({
        type: type,
        payload: response.data
    })
    let markup;
    if (renderProps) {
        markup = renderToString(<Provider store={newStore}><RouterContext { ...renderProps} /></Provider>);

    } else {
        markup = renderToString(< NotFound />);
        res.status(404);
    }
    return res.render(Constants.INDEX_FILE, { html: markup, state: JSON.stringify(newStore.getState()) });
}
