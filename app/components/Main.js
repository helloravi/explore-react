// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

var Main = React.createClass({
    render: function() {
    return (
        <div>
            Hello World
        </div>
        )
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));


ReactDOM.render(
      <h1>Hello, world!</h1>,
        document.getElementById('root')
    );
