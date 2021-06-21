const initialState = {
    list : [],
    delete: []
}
var deleteData = []
const todoReducers = (state = initialState, action) => {
    
    switch(action.type){
        case "ADDTODO":
        const { id, data, desc, date } = action.payload;
        return{
            ...state,
            list :[
                ...state.list,
                {
                id:id,
                data:data,
                date:date,
                desc:desc
                }
            ]
        }

        case "DELETETODO":

            // console.log('type : ', typeof deleteData);
            var existingData = state.list.find(elem => elem.id === action.id)
            console.log('type existing : ',existingData);
            // var deleteData = deleteData.concat(existingData)
            // deleteData.push(existingData)

            // const deleteData = existingData.push(...existingData)
            deleteData = [...deleteData, existingData];
            console.log('Deleted Data : ',deleteData);
            // const deleteData1 = deleteData.push(existingData)
            // console.log('newArray Data 1 : ',deleteData);


        //    const mapVala = state.list.map((elem) => ({id : elem.id, data: elem.data}))
        //    console.log('MapVala 2 : ', mapVala)

            const newList = state.list.filter((elem) => elem.id!== action.id)
            console.log('New List vala : ',newList);
         
            // var result = mapVala.filter(function (o1) {
            //     return newList.some(function (o2) {
            //         const final = o1.id !== o2.id; //
            //         console.log("Final : ", final);
            //    });
            // });
            // console.log('Result : ',result);
            // let result = result1.filter(o1 => result2.some(o2 => o1.id === o2.id));         
            // let result = result1.filter(o1 => !result2.some(o2 => o1.id === o2.id));

        return{
            ...state,
            delete : deleteData,
            list : newList
        }
        default: return state;
    }

}

export default todoReducers;