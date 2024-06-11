import React, { useEffect, useState } from 'react'


const getLocalItems = () => {
   
    if (localStorage.getItem('todoItems')) {
        return JSON.parse(localStorage.getItem('todoItems'))
    }
    else {
        return [];
    }
}
const Forms = () => {


    const [inputVal, setInputval] = useState('');
    const [todoList, setTodoList] = useState(getLocalItems());
    const handleSubmit = (e) => {
        
    console.log(e.target.id)
        e.preventDefault();
        if (inputVal.trim() === '') return;
        setTodoList((prev) => [...prev, inputVal]);
        setInputval('');
     
    }
    const handleDelete = (id) => {
        setTodoList(todoList.filter((item, i) => {
            return i != id
        }))
    }
    const handleEdit = (todoItem, id) => {
console.log(todoItem, id);
setInputval(todoItem);

    }
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

export default Forms