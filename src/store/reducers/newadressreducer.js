let defaultState = {
  name:'',
  sex:'',
  tel:'',
  adress:'',
  number:'',
  label:'',
  default: false
}
function newAdressReducer (state = defaultState, action){
  const {type,data} = action;
  switch (type) {
    
    case 'addAdress':
      return data;
    default:
      return state
     
  }
}
export default newAdressReducer 