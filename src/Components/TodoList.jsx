// src/components/TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../store/slices/todoSlice';

const TodoList = () => {
    const [inputVal, setInputVal] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const todos = useSelector((state) => state.todos);
    const {authenticated} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal.trim() === '') return;

        if (editIndex !== null) {
            dispatch(editTodo({
                index: editIndex,
                newTodo: inputVal
            }));
            setEditIndex(null);
        } else {
            dispatch(addTodo(inputVal));
        }
        setInputVal('');
    };

    const handleEdit = (todoItem, index) => {
        setInputVal(todoItem);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        dispatch(deleteTodo(index));
    };

    return (
        <>
        {authenticated ? (     <>
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
                            {todos.map((todoItem, index) => (
                                <tr key={index}>
                                    <td className="mx-5">
                                        <li>{todoItem}</li>
                                    </td>
                                    <td>
                                        <button
                                            className="mx-5 rounded-2xlp-2 bg-green-400"
                                            onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleEdit(todoItem, index)}
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
        </>) : (
            <>
            <SignIn />
        </>)}
        </>
   
    );
};

export default TodoList;
