import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, } from '../Action/todoAction'
// import {} from "react-bootstrap";
import '../components/todo.css'
function Todo() {

    const [inputData, setInputData] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    console.log("Todo valaa");
    return (
        <>
          {/* <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar> */}
            <div className="container">
                <h2>TODO LIST</h2>
                <h3>Add Item</h3>
                <p style={{display: 'grid'}}>
                <input id="new-task" type="text"
                placeholder="Enter Your Heading"
                value={inputData}
                onChange={event => setInputData(event.target.value)}
                />
                
                <input id="date" 
                className="bor" type="text" 
                placeholder="Enter Date"
                value={inputDate}
                onChange={event => setInputDate(event.target.value)}
              />
                
                <textarea className="bor" name="" id="description" cols="50" rows="5" 
                placeholder="Enter description"
                value={inputDesc}
                onChange={event => setInputDesc(event.target.value)}
                >
                </textarea>
                
                <button id="new-task-btn"
                onClick={() => dispatch(addTodo(inputData, inputDate, inputDesc), setInputData(''),
                setInputDate('') ,
                setInputDesc('')
                )}>Add</button>
                </p>
                    {/* <h3>Todo</h3> */}
                    {/* <ul id="incomplete-tasks">
                    {
                        list.map(elem=>{
                            return(
                    <div>
                        <li key={elem.id}>{elem.data}</li>
                    <button id="new-task-btn"
                    onClick={()=>dispatch(deleteTodo(elem.id))}>Delete</button>
                   </div>
                   )
                        })
                    }
                    </ul> */}

                    {/* <h3>Completed</h3>
                   
                    <ul id="incomplete-tasks">
                    </ul> */}
                    {/* <ul id="completed-tasks">
                        <li>
                            <input type="checkbox" defaultChecked/>
                            <label>See the Doctor</label>
                            <input type="text"/>
                        </li>
                    </ul> */}
            </div>
        </>
    )
}

export default Todo