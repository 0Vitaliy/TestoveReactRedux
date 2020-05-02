// @ts-ignore
import React from 'react';
import {connect} from 'react-redux';
import Blog from "../components/Blog";

class App extends React.Component {
    props: any;

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Blog/>
            </div>
        );
    }
}

export default App;

