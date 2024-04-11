import '../styles/App.css';
import '../styles/base/base.css'
import ToDoList from '../components/ToDoList';
import { useState } from 'react'
import data from "../data/data.json";

function App() {
    const [list, setList] = useState(data);

    function addTask() {
        const newIndex = list.length + 1;
        let tempArr = [...list];
        tempArr.push({
            id: "block-" + newIndex,
            content: "test-" + newIndex,
            complited: false
        });

        setList(tempArr);
    }
    
    return (
        <div className='container'>
            <button type='button' onClick={addTask}>Add new To Do item</button>
        
            <ToDoList list={list}/>
        </div>
        
    );
}

export default App;