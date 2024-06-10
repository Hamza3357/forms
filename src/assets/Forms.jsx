import React, { useEffect, useState } from 'react'


const getLocalItems = () => {
 let list = localStorage.getItem('lists')
    if(list) {
        return JSON.parse(localStorage.getItem('lists'))
    }
    else{
        return [];
    }
}
const Forms = () => {
 
 
    const [inputVal, setInputval] = useState('');
    const [todoList, setTodoList] = useState(getLocalItems());
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
const handleEdit = (e) => {

}
useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todoList));
 }, [todoList]);
// const openDoor = e => {
//     e.currentTarget.parentElement.classList.add("opened");
//     const newValue = [...openedArr, e.currentTarget.id];
//     setOpenedArr(newValue);
//     localStorage.setItem("openDoors", JSON.stringify(newValue));
//   };
//  useEffect(() => {
//     localStorage.getItem("todos", setTodoList(JSON.parse(todoList)));
//  }, []);
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
                                        <td className='mx-5 '>  <li>{todoItem}
                                        </li></td>
                                        <td > <button className='mx-5 rounded-2xlp-2 bg-green-400' onClick={()=> handleDelete(id)}>delete</button> <button onClick={()=> handleEdit(id)} className='bg-blue-700 text-white'>Edit</button></td>

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