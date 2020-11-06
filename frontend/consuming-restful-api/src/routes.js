import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Book from './pages/Book';
import NewBook from './pages/NewBook';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/book" component={Book}/>
                <Route path="/books/new" component={NewBook}/>
            </Switch>
        </BrowserRouter>
    );
}