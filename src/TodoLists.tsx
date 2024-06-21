import React, { useState, useEffect } from "react";
import Todos from "./TodoItems.tsx";

const TodoLists: React.FC = () => {

    interface todoItemProps {
        todo: string;
        completed: boolean
    }

    interface todoListsProps {
        todo: string;
        completed: boolean
    }

    const [todoItem, setTodoItem] = useState<todoItemProps>({ todo: '', completed: false });
    const [todoLists, setTodoLists] = useState<todoListsProps[]>([]);

    const handleInputChage = (e) => {
        setTodoItem({ todo: e.target.value, completed: false })
    }

    const updateTodoLists = () => {
        const items = JSON.parse(localStorage.getItem('todoList')!);
        setTodoLists(items)
    }

    const handleAddTodo = () => {
        const TodoItems = localStorage.getItem('todoList')!;
        if (TodoItems) {
            const updatedList = JSON.parse(TodoItems)
            updatedList.push(todoItem)
            localStorage.setItem('todoList', JSON.stringify(updatedList))
        }
        else {
            localStorage.setItem('todoList', JSON.stringify([todoItem]))
        }
        updateTodoLists();
    }

    const handleCheckBoxClick = (task) => {
        const TodoItems = JSON.parse(localStorage.getItem('todoList')!);
        const itemIndex = TodoItems.findIndex((item) => item.todo === task)
        TodoItems[itemIndex].completed = !TodoItems[itemIndex].completed
        localStorage.setItem('todoList', JSON.stringify(TodoItems))
        updateTodoLists();
    }

    const handleFilter = (type: string): void => {
        if (type === 'all') {
            return updateTodoLists()
        } else if (type === 'completed') {
            const TodoItems = JSON.parse(localStorage.getItem('todoList')!);
            const items = TodoItems.filter((item) => item.completed === true)
            setTodoLists(items)
            return
        } else {
            const TodoItems = JSON.parse(localStorage.getItem('todoList')!);
            const items = TodoItems.filter((item) => item.completed === false)
            setTodoLists(items)
            return
        }
    }

    useEffect(() => {
        updateTodoLists()
    }, [])

    return (
        <main>
            <div>
                <label htmlFor="description"> Description</label>
                <input type="text" id="description" onChange={handleInputChage} />
                <button onClick={handleAddTodo}>Add Todo</button>
                <br />
                <br />
                <div className="flexItems">
                    <button data-testId="all" onClick={() => handleFilter('all')}> All</button>
                    <button data-testId="active" onClick={() => handleFilter('active')}>Active</button>
                    <button data-testId="completed" onClick={() => handleFilter('completed')}> Completed</button>
                </div>
                <Todos todos={todoLists} handleCompletion={handleCheckBoxClick} />
            </div>

        </main>
    )

}

export default TodoLists;