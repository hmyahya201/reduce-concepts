const action = [
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "increment", payload: 1},
    {type: "decrement", payload: 1},
]

const inicialState = {
    value: 0
}
const reducerFunction = (state, action)=>{
    if(action.type === "increment"){
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if(action.type === "decrement"){
        return {
            ...state,
            value: state.value - action.payload,
        }
    } else{
        return state
    }
}
const finalResult = action.reduce(reducerFunction, inicialState)

console.log(finalResult)