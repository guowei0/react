import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class RouteMap extends React.Component{
    render(){
        const { routes } = this.props;
        const defaultRoute = <Route key={'-1'} exact path='/' component={()=><Redirect to='/ / ' />}/>
        return(
            <Switch>
                {
                    routes.length && routes.map((ite,ind)=>{
                        return(
                            <Route key={ind} path={ite.path} component={(api)=>{
                                const Component = ite.component;
                                const Children = ite.children === undefined ? [] : ite.children;
                                return <Component routes={Children} {...api}></Component>
                            }}></Route>
                        )
                    }).concat([defaultRoute])
                }
            </Switch>
        )
    }
}