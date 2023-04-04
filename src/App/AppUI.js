import React from "react";
import { TodoContext  } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch/>
            <TodoList>
                {error && <p>hubo un error</p>}
                {loading && <p>Estamos cargando</p>}
                {(!loading && !searchedTodos.length) && <p className="sugestionText">Crea tu primer To-Do!</p>}

                {searchedTodos.map(todo =>(
                    <TodoItem
                    //TODO: key={todo.text} a key={todo.id}
                        key={todo.text}
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete={()=> completeTodo(todo.text)}
                        onDelete={()=> deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal &&(
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}
export { AppUI }