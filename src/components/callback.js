import {Component} from 'react';
import {serTdToken, setAccessToken, setIdToken} from '../utils/auth';

class Callback extends Component {

    componentDidMount() {

        setAccessToken();
        setIdToken();
        window.location.href = "/";
    }

    render() {
        return null;
    }
}