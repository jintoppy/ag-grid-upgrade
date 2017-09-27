import Immutable from 'seamless-immutable';

const createData = (size) => {
    let newdata = [];
    for(let i=0; i< size; i++){
        newdata.push(
            {
                id: i+1,
                make: "Toyota" + i,
                model: "Celica" + i,
                price: 35000
            }
        )
    }
    return newdata;
}

const initialState = Immutable({
    data: createData(100),
    selectedRows: {}
});


export default (state = initialState, action) => {
    switch (action.type) {
        case 'ROW_SELECTED': {
            return state.set('selectedRows', Object.assign(
                {},
                state.selectedRows,
                action.selectedRow
            ));
        }
        case 'ROW_DATA_CHANGED':
            let newdata = [];
            state.data.forEach((item, index) => {
                if(index === 0){
                    newdata.push(
                        {
                            ...item,
                            price: item.price + Math.random()
                        }
                    );        
                }
                else{
                    newdata.push({...item});
                }                
            });
            newdata.push({
                id: state.data.length+1,
                make: "Toyota", checked: true, model: "Celica", price: 35000+Math.random()});
            return state.set('data', newdata);
        default:
            return state;
    }
};