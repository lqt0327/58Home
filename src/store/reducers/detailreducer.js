let defaultState = [
  {title:'',
  price:0,
  count:0,
 },
]
function detailReducer(state = defaultState, action) {
    switch (action.type) {
        case "addDetail":
            console.log('--------------', action)
            return action.data;
        default:
            return state;
    }
}
export default detailReducer;