import React from 'react';


const Counter = () => {
    const [counters, setCounters] = React.useState([0]);

    const increment = (index) => {
        setCounters(counters.map((ele, idx) => (idx === index ? ele + 1 : ele)));
    };
    const decrement = (index) => {
        setCounters(counters.map((ele, idx) => (idx === index ? ele - 1 : ele)));
    };

    const deleteCounter = (index) => {
        setCounters(counters.filter((ele, idx) => idx !== index));
    };

    const addCounter = () => {
        setCounters(counters.concat([0]));
    };

    return (
        <div>
            <button className="btn btn-primary btn-xs" onClick={addCounter}>
                Add Counter
            </button>
            <br />
            <br />
            <div className="row">
                {counters.map((element, index) => {
                    return (
                        <div className="col-lg-4 col-xl-4 col-sm-6 col-md-4 col-xs-12 counter border" key={index}>
                            <h1>{element}</h1>
                            <div className="row">
                                <div className="col-4"><button className="btn btn-success btn-xs" onClick={() => increment(index)}>
                                    Increment
                                </button>
                                </div>
                                <div className="col-4"><button className="btn btn-warning btn-xs" onClick={() => decrement(index)}>
                                    Decrement
                                </button>
                                </div>
                                <div className="col-4"><button className="btn btn-danger btn-xs" onClick={() => deleteCounter(index)}>
                                    Delete
                                </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Counter;