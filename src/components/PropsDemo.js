import React, {useState} from 'react';

const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');
    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }

    const toggleStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
    }

    const toggleBackground = () => {
        backgroundColor === 'purple' ? setBackgroundColor('green') : setBackgroundColor('purple');
    }

    const toggleRadius = () => {
        borderRadius === '5px' ? setBorderRadius('100px') : setBorderRadius('5px');
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                <FunctionalComponent string="Will this display?" function={toggleColor}/>
                <FunctionalComponent string="Props are pretty cool right?" function={toggleStyle} />
                <FunctionalComponent string="You can send data from one component..." function={toggleBackground}/>
                <FunctionalComponent string="...to another" function={toggleRadius}/>
            </div>
        </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    )
}