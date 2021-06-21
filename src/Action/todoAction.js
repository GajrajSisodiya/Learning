export const addTodo = (data, date, desc) => {
    return{
        type: 'ADDTODO',
        payload:
        {
            id: Math.random(),
            data:data,
            date:date,
            desc:desc    
        }
    }
}

export const deleteTodo = id => {
    return{
        type: 'DELETETODO',
        id
    }
}