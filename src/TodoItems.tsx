import React from 'react';
import './App.css'

type TodosProps = {
    todos: {
        todo: string;
        completed: boolean
    }[];
    handleCompletion: (T: string) => void
}

const Todos: React.FC<TodosProps> = ({ todos, handleCompletion }) => {

    interface todoList {
        todo: string;
        completed: boolean
    }

    const handleCheckBoxClick = (task: string) => {
        handleCompletion(task)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> todoLists</th>
                    </tr>
                </thead>
                <tbody>
                    {todos && todos.map((todo: todoList) => (
                        <tr key={todo.todo}>
                            <td>
                                <span className='flexItems'>
                                    <input type="checkbox" checked={todo.completed} onClick={() => handleCheckBoxClick(todo.todo)} data-testId="completion" />
                                    <p className={todo.completed ? 'strikeThrough paragraph' : 'paragraph'}>{todo.todo}</p>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Todos;