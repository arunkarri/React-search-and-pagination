import React from 'react';
import Counter from './counter';
import ToDo from './todo';


const App = () => {
    const [show, setShow] = React.useState('TODO');
    const toggle = () => {
        setShow(show === 'COUNTER' ? 'TODO' : 'COUNTER');
    };
    return (
        <div>
            <button className="btn btn-xs btn-info" onClick={toggle}>
                Toggle View
      </button>
            <br />
            <br />
            {show === 'COUNTER' ? <Counter /> : <ToDo />}
        </div>
    );
};

export default App;