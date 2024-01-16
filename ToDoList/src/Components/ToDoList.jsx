
import styles from './ToDoList.module.scss';
import { useState } from 'react';

// This is a functional component for a ToDo List
const ToDoList = () => {
    // toDoList is the state variable for the list of todos, setToDoList is the function to update this state
    const [toDoList, setToDoList] = useState([]);
    // toDoItem is the state variable for the input field value, setToDoItem is the function to update this state
    const [toDoItem, setToDoItem] = useState('');

    // This function is called when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behaviour
        if (toDoItem.trim() !== '') { // Check if toDoItem is not empty
            setToDoList([...toDoList, toDoItem]); // Adds the current toDoItem to the toDoList array
            setToDoItem(''); // Resets the toDoItem to an empty string
        }
    }

    // This function is called when the delete button is clicked
    const handleDelete = (index) => {
        const newList = [...toDoList]; // Creates a copy of the current toDoList
        newList.splice(index, 1); // Removes the item at the given index
        setToDoList(newList); // Updates the toDoList with the new list
    }

    // This function is called when the Clear List button is clicked
    const deleteAll = () => {
        setToDoList([]); // Resets the toDoList to an empty array
    }

    // The component returns a Clear List button, a list of todos, and a form to add new todos
    return (
        <>
            <button className={styles.deleteAll} onClick={deleteAll}>Clear List</button> {/* // Calls deleteAll when clicked */}
            <div className={styles.container}>
                <ul>
                    {toDoList.map((item, index) => (
                        <li key={index}>
                            {item} {/* // Displays the todo item */}
                        </li>
                    ))}
                </ul>
                <ul>
                    {toDoList.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleDelete(index)}>-</button> {/* // Calls handleDelete when clicked */}
                        </li>
                    ))}
                </ul>
            </div>
            <form onSubmit={handleSubmit} className={styles.addNew}> {/* // Calls handleSubmit when submitted */}
                <input type="text" value={toDoItem} onChange={(e) => setToDoItem(e.target.value)} />
                <button type="submit">+ add new</button>
            </form>


        </>
    );

}

export default ToDoList;


