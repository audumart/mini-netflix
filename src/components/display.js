import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from './nav';
import {isLoggedIn} from '../utils/auth';
import axios from 'axios';

class Display extends Component {

    render() {

        return (
            <div>
        <Nav />
        <h3 className="text-center"> Latest Videos on Min-netflix </h3>
        <hr/>

        <div className="col-sm-12">

        </div>
      </div>
        )
    }
}