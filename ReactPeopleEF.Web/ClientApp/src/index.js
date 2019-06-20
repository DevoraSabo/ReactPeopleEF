import React from 'react';
import { render } from 'react-dom';
import PeoplePage from './PeoplePage';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import RedirectDemo from './RedirectDemo';
import ParameterDemo from './ParameterDemo';
import AddPerson from './AddPerson';


//class HomePage extends React.Component {
//    render() {
//        return (
//            <PeoplePage></PeoplePage>
//        )
//    }
//}

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={PeoplePage} />
                <Route exact path='/people' component={PeoplePage} />
                <Route path='/addperson' component={AddPerson} />
                //<Route exact path='/parameterdemo/:id/:foo?' component={ParameterDemo} />
            </div>
        );
    }
}


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));