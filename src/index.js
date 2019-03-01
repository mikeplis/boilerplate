import React from 'react';
import ReactDOM from 'react-dom';

const App = () => React.createElement('div', {}, 'Hello World');

ReactDOM.render(React.createElement(App), document.getElementById('root'));
