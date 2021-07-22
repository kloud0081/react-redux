export const add_todo="todo/addTodo"
export const filte_todo="todo/remove"
export const edit_todo="todo/edit"
export const verdone_todo="todo/done"
export const showall_todo="todo/showall"

export function addtodo(description){
  return{   type:add_todo,
    payload:{
        id:Math.random(),
       description,
       isdone:false,
    }
  }
}

export function edittodo(id,description){
    return { type:edit_todo,
       payload:{ 
           id,
           description,
           isdone:false,
        },
    }
}
export function done(id,done){
  return { type:verdone_todo,
     payload:{ 
       id,
         done,
      },
  }
}

