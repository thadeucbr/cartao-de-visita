import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ContextMenuItem = (props) => {
    const [active, setActive] = 
    React.useState(false), [visible, setVisible] = 
    React.useState(false), [position, setPosition] = React.useState({ x: 0, y: 0 });
    React.useEffect(() => {
        if (props.active) {
            setActive(props.active);
            setPosition({ x: props.position.x, y: props.position.y });
            setTimeout(() => setVisible(true), 50);
        }
        else {
            setVisible(false);
            setTimeout(() => setActive(false), 350);
        }
    }, [props.active]);
    React.useEffect(() => {
        setPosition({ x: props.position.x, y: props.position.y });
    }, [props.position]);
    if (active) {
        const getStyles = () => {
            const left = visible ? position.x + props.offset.x : position.x, opacity = visible ? 1 : 0, top = visible ? position.y + props.offset.y : position.y;
            return {
                left: `${left}px`,
                opacity,
                top: `${top}px`,
                transitionDelay: `${props.index * 50}ms`
            };
        };
        return ReactDOM.createPortal((React.createElement("button", { type: "button", className: "context-menu-item", style: getStyles() },
            React.createElement("i", { className: props.icon }),
            React.createElement("h1", null, props.name))), document.getElementById("app"));
            
    }
    
    return null;
};
export default ContextMenuItem;

