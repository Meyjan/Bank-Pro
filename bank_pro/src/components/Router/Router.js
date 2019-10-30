import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Login from "../Login/Login"
import Title from "../Title/Title"
import Help from "../Help/Help"
import Transfer from "../Transfer/Transfer"
import TransactionHistory from "../Transaction/TransactionHistory"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" render = {() => (<Redirect to = "/Title"/>)}/>
                <Route exact path = "/Login" component = {Login}/>
                <Route exact path = "/Help" component = {Help}  />
                <Route exact path = "/Title" component = {Title}/>
                <Route exact path = "/Transfer" component = {Transfer}/>
                <Route exact path = "/TransactionHistory" component = {TransactionHistory}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;