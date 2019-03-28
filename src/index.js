import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from './components/Button';

import './styles/tailwind.module.css';

export const App = () => {
    const [state, setState] = React.useState(0);
    return (
        <div>
            <Button onClick={() => setState(state + 1)}>{state}</Button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
