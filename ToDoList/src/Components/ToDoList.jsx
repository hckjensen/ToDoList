import styles from './ToDoList.module.scss';
import { useState } from 'react';


const ToDoList = () => {

    const [toDoList, setToDoList] = useState([]);
    const [toDoItem, setToDoItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (toDoItem.trim() !== '') { // Check if toDoItem is not empty
            setToDoList([...toDoList, toDoItem]);
            setToDoItem('');
        }
    }

    const handleDelete = (index) => {
        const newList = [...toDoList];
        newList.splice(index, 1);
        setToDoList(newList);
    }

    const deleteAll = () => {
        setToDoList([]);
    }

    return (
        <>
            <button className={styles.deleteAll} onClick={deleteAll}>Clear List</button>
            <div className={styles.container}>


                <ul>
                    {toDoList.map((item, index) => (
                        <li key={index}>
                            {item}

                        </li>
                    ))}
                </ul>
                <ul>
                    {toDoList.map((item, index) => (
                        <li key={index}>

                            <button onClick={() => handleDelete(index)}>-</button>
                        </li>
                    ))}
                </ul>
            </div>

            <form onSubmit={handleSubmit} className={styles.addNew}>
                <input type="text" value={toDoItem} onChange={(e) => setToDoItem(e.target.value)} />
                <button type="submit">+ add new</button>
            </form>


        </>
    );

}

export default ToDoList;


