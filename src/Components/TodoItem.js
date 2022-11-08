import React from "react";

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span className={'Icon Icon-check'}>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem}