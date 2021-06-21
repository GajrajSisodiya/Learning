import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../Action/todoAction'
import '../components/todo.css'

function ShowTodo() {
    const [inputData, setInputData] = useState('')
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return(
        <>
            <div className="container">
                {/* <h2>TODO LIST</h2>
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
              />
                
                <textarea className="bor" name="" id="description" cols="50" rows="5" 
                placeholder="Enter description">
                </textarea>
                 */}
                {/* <button id="new-task-btn"
                onClick={() => dispatch(addTodo(inputData), setInputData(''))}>Add</button> */}
                    <h3>Todo - Show Tasks</h3>
                    <ul id="incomplete-tasks">
                    {
                        list.map((elem, index)=>{
                            return(
                    <div>

                    <section>
                    <div class="tbl-header">
                        <table cellpadding="5" cellspacing="10" border="0">
                        <thead>
                            <tr>
                            {/* <th>Id</th> */}
                            <th>Heading</th>
                            <th>Date</th>
                            <th>Acttion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={elem.id}>
                            {/* <td>{index+1}</td> */}
                                <td style={{textAlign:"center"}}>{elem.data}</td>
                                <td>{elem.date}</td>
                                <td> <button id="new-task-btn"
                    onClick={()=>dispatch(deleteTodo(elem.id))}>Delete</button></td>
                    <br />
                      </tr>
                      <h3>Description:-</h3>
                        <p> {elem.desc}</p>
                        </tbody>
                        </table>
                    </div>
                    </section>
                        {/* <li key={elem.id}> </li> */}
                   
                   </div>
                   )
                        })
                    }
                    </ul>

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

export default ShowTodo