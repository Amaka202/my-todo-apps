import React from 'react';
import { useNavigate } from "react-router-dom";
import AddTodo from './AddTodo';

function Todo() {
    const navigate = useNavigate();

    const [mytodos, setMyTodos] = React.useState([
        { text: "Learn about React", isCompleted: true },
    ]);

    const addTodo = text => {
        const newTodos = [...mytodos, { text }];
        setMyTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...mytodos];
        newTodos[index].isCompleted = !(newTodos[index].isCompleted);
        setMyTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...mytodos];
        newTodos.splice(index, 1);
        setMyTodos(newTodos);
    };



    return (
        <div>
            <AddTodo addTodo={addTodo} />
            <ul>
                {
                    mytodos.map((val, index) => {
                        return (
                            <div className='todo-wrapper'>
                                <li style={{ textDecoration: val.isCompleted && 'line-through' }}>
                                    {val.text}
                                </li>
                                <div>
                                    <button onClick={() => completeTodo(index)}>Done</button>
                                    <button onClick={() => removeTodo(index)}>X</button>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
            <div className='link-btn'>
                <button onClick={() => navigate("/")}>Go Home</button>
            </div>
        </div>
    )
}

export default Todo;
