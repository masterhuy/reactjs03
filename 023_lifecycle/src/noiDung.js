import React, { Component } from 'react';

class NoiDung extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps cua noidung.js: ' + nextProps.name);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate cua noidung.js');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate cua noidung.js');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate cua noidung.js');
    }
    

    render() {
        console.log('render cua noidung.js');
        return (
            <div>
                <h4>Xin chao {this.props.name}</h4>
            </div>
        );
    }
}

export default NoiDung;