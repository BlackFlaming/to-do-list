import React, { useState } from 'react'
import {ReactComponent as Trash} from "../icons/trash.svg"
export default function ToDoItem({ item, onRemove }) {
    const [isComplited, setIsComplited] = useState(item.complited);

    function handleComplite(event) {
        setIsComplited(event.target.checked);
    }

    
    return (
        <div className={`todo-item ${isComplited ? "complited" : "" }`}>
            <div className=''>
                <input type="checkbox" id={`${item.id}-input`} checked={isComplited} onChange={handleComplite} className="todo-item__checkbox" />
                <label className='todo-item__checkbox-switch' htmlFor={`${item.id}-input`}>
                    <span></span>
                </label>
                
            </div>

            <div className='todo-item__content-wrapper'>
                <p className='todo-item__content'>{item.content}</p>
            </div>

            <button className='todo-item__button'>
                <Trash />
            </button>
        </div>
    )
}
