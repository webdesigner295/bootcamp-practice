const counterReducer = (state, action) =>{
    switch(action){
        case 'INCRENMENT':
            return state + 1
            default:
             throw new Error()
    }
}
export default counterReducer