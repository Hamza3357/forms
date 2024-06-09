import React, { useState } from 'react'


const Forms = () => {
  
 
    const [inputVal, setInputval] = useState('');
    const [todoList, setTodoList] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal.trim() === '') return;
        setTodoList((prev) => [...prev, inputVal]);
        setInputval('');

    }
    const handleDelete = (id) => {
        setTodoList(todoList.filter((item, i) => {
            return i!=id
        } ) )
    }

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
                                <tr  key={id}>
                                        <td className='mx-5 '>  <li>{todoItem}
                                        </li></td>
                                        <td onClick={()=> handleDelete(id)} className='mx-5 rounded-2xlp-2 bg-green-400'>delete</td>

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