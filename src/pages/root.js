import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import PagesAnime from "./animes";
import "./estilos.css"
export default function PagesRoot(){
    return(
        <Router>
        <Switch>
            <Route path='/anime'>
                <PagesAnime />
            </Route>
        
            <Redirect from='/' to='/anime' />
        </Switch>
    </Router>
    )
}