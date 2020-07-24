let akeywords = localStorage['hk'] !== undefined ? JSON.parse(localStorage['hk']) : []
function hkReducer(state = {keywords:akeywords}, action) {
    switch (action.type) {
        case "addHk":
            return Object.assign({},state,action);
        default:
            return state;
    }
}
export default hkReducer;