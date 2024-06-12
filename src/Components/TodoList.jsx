import React, { useEffect, useState } from 'react'


const getLocalItems = () => {
//    getting items from local storgae
    if (localStorage.getItem('todoItems')) {
        return JSON.parse(localStorage.getItem('todoItems'))
    }
    else {
        return [];
    }
}
const TodoList = () => {

    const [inputVal, setInputval] = useState('');
    const [todoList, setTodoList] = useState(getLocalItems());

    // handling form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal.trim() === '') return;
        setTodoList((prev) => [...prev, inputVal]);
        setInputval('');
     
    }
    // handling delete
    const handleDelete = (id) => {
        setTodoList(todoList.filter((item, i) => {
            return i != id
        }))
    }

    // handling edit
    const handleEdit = (todoItem, id) => {
console.log(todoItem, id);
setInputval(todoItem);
const item = JSON.parse(localStorage.getItem('todoItems'))
newItem = item.forEach((tm, idx)=> {
    if(idx == id){
        localStorage.setItem()
    }
})
    }

    // setting items to local storage
    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label for="inputPassword2" class="sr-only">Todo</label>
                    <input type="text" value={inputVal} onChange={(e) => setInputval(e.target.value)} placeholder="Todo" />
                    <button type='submit' className="btn bg-black btn-primary text-white mb-2">Submit</button>
                </form>
            </div>
            <div>
                <ul>
                    <table class="table">
                        <thead>
                            <tr className=''>
                                <th className='mx-5 p-7' scope="col">Todos</th>
                                <th className='mx-5 p-7' scope="col">Action</th>
                            </tr>
                        </thead>
                        {todoList.map((todoItem, id) => {
                            return (
                                <>
                                    <tr key={id}>
                                        <td className='mx-5 '>  
                                        <li>{todoItem}
                                        </li>
                                        </td>
                                        <td > 
                                        <button className='mx-5 rounded-2xlp-2 bg-green-400' onClick={() => handleDelete(id)}>delete</button> 
                                        <button onClick={() => handleEdit(todoItem, id)} className='bg-blue-700 text-white'>Edit</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </table>
                </ul>
            </div>
        </>
    )
}

export default TodoList