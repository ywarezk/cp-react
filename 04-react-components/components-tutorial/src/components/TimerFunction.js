import React, {useState, useEffect} from 'react';

// props => {cb: ..., a: '...', b:...}
export default function Timer({cb}) {
    const [current, setCurrent] = useState(5);

    // componentDidMount, componentDidUpdate
    // componentWillUnmount
    useEffect(function() {
        console.log('useEffect function');
        const intervalId = setInterval(() => {
            setCurrent(current - 1);
        }, 1000);

        return function() {
            clearInterval(intervalId)
        }
    }, [current]);

    
    useEffect(function() {
        if (current === 0) {
            cb();
        }
    });

    return (
        <div>
            <h1>{current}</h1>
        </div>
    )
}