const counterReducer = (state, action) =>{
    switch(action){
        case 'INCRENMENT':
            return state + 1
    }
}
export default counterReducer