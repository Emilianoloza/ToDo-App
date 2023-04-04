import React from "react";
import {TodoContext} from '../TodoContext'
import './TodoCounter.css';


function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
        <React.Fragment>
            <div className="containerCounter">
            <h2>Bienvenido</h2>
            <h2>Completados: {completedTodos} de {totalTodos}</h2>
            </div>
        </React.Fragment>
    );
}

//De esta forma puedo darle nombre al modulo que deseo exportar
export { TodoCounter };