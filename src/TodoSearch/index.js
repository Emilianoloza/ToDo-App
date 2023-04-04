import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
import '../TodoCounter/TodoCounter.css';


function TodoSearch(){
    const {setSearchValue, searchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return(
        <input
            className="TodoSearch"
            placeholder="Comida"
            value={ searchValue }
            onChange={ onSearchValueChange }
        />
    );
}

export { TodoSearch };