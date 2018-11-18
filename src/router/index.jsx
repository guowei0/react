import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteMap from './map';
import RouteConfig from './routes';

export default class RouterView extends React.Component{
    render(){
        const { routes } = this.props;
        return(
            <BrowserRouter>
                <RouteMap routes={routes ? routes : RouteConfig} />
            </BrowserRouter>
        )
    }
}