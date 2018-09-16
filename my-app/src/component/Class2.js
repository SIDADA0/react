 /* jshint esversion: 6 */ 
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

const CustomLinkExample =() =>(
    <Router>
        <div>
            <OldSchoolMenuLink aciveOnlyWhenExact = {true} to="/" label="Home" />>            
            <OldSchoolMenuLink  to="/about" label="About" />
            <hr /> 
            <Route exact path="/" component={Home} />>    
            <Route path="/about" component={About} />>    
        </div>
    </Router>
);

const OldSchoolMenuLink =({label, to, aciveOnlyWhenExact}) =>(
    <Route
        path={to}
        exact={aciveOnlyWhenExact}
        children={({match})=>(
            <div className={match ? "active" :""}>
                {match ? ">" : ""}
                <Link to={to}>{label}</Link>
            </div>
        )}
    />
    );

const Home =() =>(
    <div>
        <h2>Home</h2>
    </div>
);

const About =() =>(
    <div>
        <h2>About</h2>
    </div>
);

export default CustomLinkExample;
// export default class Class1 extends Component {
//     render() {
//         return (
//         <div>
//             <h1>Class2</h1>
//         </div>
//         )
//     }
// }
