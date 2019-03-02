import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [state, setState] = React.useState(0);
    return <button onClick={() => setState(state + 1)}>{state}</button>;
};

ReactDOM.render(<App />, document.getElementById('root'));
