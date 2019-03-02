import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [state, setState] = React.useState(0);
    return React.createElement(
        'button',
        {
            onClick: () => setState(state + 1)
        },
        state
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
