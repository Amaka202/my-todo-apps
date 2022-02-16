import React from 'react';

function AddTodo({ addTodo }) {
    const [todo, setTodo] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!todo) return;
        addTodo(todo);
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                type="text"
                className="input"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo;


