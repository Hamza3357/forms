import React, { useEffect, useState } from 'react';

// Function to get items from local storage
const getLocalItems = () => {
    const savedItems = localStorage.getItem('todoItems');
    return savedItems ? JSON.parse(savedItems) : [];
};

const TodoList = () => {
    const [inputVal, setInputVal] = useState('');
    const [todoList, setTodoList] = useState(getLocalItems());
    const [editIndex, setEditIndex] = useState(null); // State to track the index of the item being edited

    // Handling form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal.trim() === '') return;

        if (editIndex !== null) {
            // If editing, update the existing item in state and local storage
            const updatedList = todoList.map((item, index) =>
                index === editIndex ? inputVal : item
            );
            setTodoList(updatedList);
            localStorage.setItem('todoItems', JSON.stringify(updatedList)); // Update local storage
            setEditIndex(null); // Reset edit index after updating
        } else {
            // If not editing, add a new item to state and local storage
            const newList = [...todoList, inputVal];
            setTodoList(newList);
            localStorage.setItem('todoItems', JSON.stringify(newList)); // Update local storage
        }

        setInputVal('');
    };

    // Handling delete
    const handleDelete = (id) => {
        const updatedList = todoList.filter((_, index) => index !== id);
        setTodoList(updatedList);
        localStorage.setItem('todoItems', JSON.stringify(updatedList)); // Update local storage
    };

    // Handling edit
    const handleEdit = (todoItem, id) => {
        setInputVal(todoItem);
        setEditIndex(id); // Set the index of the item being edited
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="inputTodo" className="sr-only">Todo</label>
                    <input
                        type="text"
                        id="inputTodo"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        placeholder="Todo"
                    />
                    <button type="submit" className="btn bg-black btn-primary text-white mb-2">
                        {editIndex !== null ? 'Update' : 'Submit'}
                    </button>
                </form>
            </div>
            <div>
                <ul>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="mx-5 p-7" scope="col">Todos</th>
                                <th className="mx-5 p-7" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.map((todoItem, id) => (
                                <tr key={id}>
                                    <td className="mx-5">
                                        <li>{todoItem}</li>
                                    </td>
                                    <td>
                                        <button
                                            className="mx-5 rounded-2xlp-2 bg-green-400"
                                            onClick={() => handleDelete(id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleEdit(todoItem, id)}
                                            className="bg-blue-700 text-white"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ul>
            </div>
        </>
    );
};

export default TodoList;
