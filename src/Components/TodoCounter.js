import React from "react";
import '../css/TodoCounter.css'

function TodoCounter({total,completed}){
    return (
        <h2 className="TodoCounter">Has Completado {completed} de {total} ToDos</h2>
    );
}

export {TodoCounter};