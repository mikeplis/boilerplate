import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [state, setState] = React.useState(0);
    return (
        <div>
            <button onClick={() => setState(state + 1)}>{state}</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
