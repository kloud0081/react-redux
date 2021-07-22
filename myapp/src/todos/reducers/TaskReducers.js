import {todoAction} from "../action"
const todostate={
    task:[{id:1,isdone:true, description:"complet"},{id:2,isdone:false, description:"not"},{id:3,isdone:false, description:"exercice"}],
}
export function reducers(state=todostate,action){
    switch (action.type) {
case todoAction.add_todo:return{...state,task:[...state.task,action.payload]}    
    case todoAction.edit_todo  :
      return {...state, task:   state.task.map(el=>   action.payload.id===el.id  ? {...el, description: 
        action.payload.description} : el  )     }
        case todoAction.verdone_todo  :
      return {...state, task:   state.task.map(el=>   action.payload.id===el.id  ? {...el, isdone: 
        !action.payload.done} : el  )     }
default : return state

}
}

    // return {...state,task:todostate.task.concat(state.task)}
