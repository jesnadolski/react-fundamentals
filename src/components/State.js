import React, {useState} from 'react';

const State = () => {
    return (
        <div className="main">
        <div className="mainDiv">
            <ul>
                <dt>useStae is unique to Functional Components</dt>
                <dd>Class components have a separate means of using and changing state.</dd>
                <dt>useState uses array destructuring</dt>
                <dd>useSate proves a state variable and a setState function</dd>
                <dt>useSate is a Hook</dt>
                <dd>useState is a Hook baked into React</dd>
                <dt>Triggers Re-renders</dt>
                <dd>Like with Props changes, changing the state of a component re-renders the whole component.</dd>
            </ul>
            <StateExample />
        </div>
        </div>
    );
};

export default State;

function StateExample () {
    const [text,setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return (
        <div>
            <input value = {text} onChange={e => setText(e.target.value)} />
            <br />
            <img style={{width: '100px', height: '100px'}} 
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" alt="Not Supported"
            onClick={e => setLikeNum(likeNum +1)}
            />
            <span>{likeNum}</span>
            <br />
            <p 
            style={{color: textColor}}
            onMouseEnter={e=> setTextColor('red')}
            onMouseLeave={e=> setTextColor('blue')}>Turn from blue to red upon hover</p>
        </div>
    );
};