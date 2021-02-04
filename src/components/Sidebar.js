import React from "react";
import{
    Route,
    Link,
    Switch} from 'react-router-dom'
import Home from "./Home";
import Resources from "./Resources";
import FunctionalComponentDemo from './FunctionalComponentDemo';
import JSXRules from './JSXRules';
import State from './State';
import Effects from "./Effects";
import PropsDemo from "./PropsDemo";
import Hooks from "./Hooks";
import TimePiecesApp from "./apps/timer-apps/TimePiecesApp";
import NytApp from "./apps/nyt-app/NytApp";


const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to ="/JSXRules">JSX Rules</Link></li>
                <li><Link to="/State">useState</Link></li>
                <li><Link to="/Effects">useEffect</Link></li>
                <li><Link to="/PropsDemo">Props</Link></li>
                <li><Link to="/Hooks">Hooks</Link></li>
                <li><Link to="/timer">Timers</Link></li>
                <li><Link to="/nyt">NYT App</Link></li>
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                <Route exact path="/JSXRules"><JSXRules /></Route>
                <Route exact path="/State"><State /></Route>
                <Route exact path="/Effects"><Effects /></Route>
                <Route exact path="/PropsDemo"><PropsDemo /></Route>
                <Route exact path="/Hooks"><Hooks /></Route>
                <Route exact path="/timer"><TimePiecesApp /></Route>
                <Route exact path="/nyt"><NytApp /></Route>
            </Switch>
        </div>
        </div>
    );
};

export default Sidebar;