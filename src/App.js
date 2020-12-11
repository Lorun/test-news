import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Page/Login';
import News from './components/Page/News';
import Home from './components/Page/Home';
import authProtected from './components/HOCs/authProtected';

// Application entry
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/news" component={authProtected(News)}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
