import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Trolls from './components/Trolls'
// import NewTroll from './components/NewTroll'
import Header from './components/Header'

import bubbles from './images/Bubbles.jpg'
import dirk from './images/Dirk.jpg'
import giblet from './images/Giblet.jpg'
import stacy from './images/Stacy.jpg'


export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            trolls: [
            {
                id: 1,
                name: 'Bubbles',
                age: 21,
                image: bubbles,
                enjoys: "horses, taco bell, floral prints"
            },
            {
                id: 2,
                name: 'Dirk',
                age: 27,
                image: dirk,
                enjoys: 'crossfit, muscle milk, your mom'
            },
            {
                id: 3,
                name: 'Giblet',
                age: 306,
                image: giblet,
                enjoys: 'sorcery, hot dogs, astral projection'
            },
            {
                id: 4,
                name: 'Stacy',
                age: 40,
                image: stacy,
                enjoys: 'attention, glitter, KE$HA'
            }
            ]
        }
    }
    render(){
        return(
            <div>
                <Header />
                <Router>
                        <Switch>
                            <Route exact path="/trolls" render={( props) => <Trolls trolls={this.state.trolls}/> } />
                        </Switch>
                </Router>

            </div>
        )
    }
}
