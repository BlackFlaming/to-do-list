import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
import '../styles/blocks/to-do-item.css'
import '../styles/sections/to-do-list.css'


export default function ToDoList({ list }) {
    const [toDolist, setToDolist] = useState( list );
    function removeTask(id) {
        let tempArr = [...list].filter(task => task.id !== id);

        setToDolist(tempArr);
    }

    return (
        <div className='todo-items'>
            {list.map((item) => 
                <ToDoItem key={item.id} item={item} onRemove={removeTask}/>
            )}
        </div>
  )
}

