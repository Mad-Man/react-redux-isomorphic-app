import React from 'react'
import { Route } from 'react-router'
import { MainLayout } from '../components/main-layout'
import { NotFound } from '../components/not-found'
import { Items } from '../list/components/items'
import { Details } from '../details/components/details'

const routes = (
    <Route path="/" component={MainLayout}>
        <Route name="items" path="items" component={Items} />
        <Route name="item" path="items/:itemId" component={Details} />
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;