import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import config from './assets/js/conf/config.js';
const HomeComponent = lazy(() => import('./pages/home/home/index'));
const Detail = lazy(() => import('./pages/home/serve/detail.jsx'));

export default function RouterComponent() {
    return (
        <React.Fragment>
            <Router>
                <React.Fragment>
                    <Suspense fallback={<React.Fragment />}>
                        <Switch>
                            <Route path={config.path + "home"} component={HomeComponent} ></Route>
                            <Route path='/serve/detail' component={Detail}/>
                            <Redirect to={config.path + "home/index"}></Redirect>
                        </Switch>
                    </Suspense>
                </React.Fragment>
            </Router>
        </React.Fragment>
    )
}