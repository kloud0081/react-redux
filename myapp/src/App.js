import Style from "./Style.css"
import {useSelector,useDispatch} from "react-redux"
import {useState} from "react"
import {todoAction} from "./todos/action"
import {Form,Button,Modal} from "react-bootstrap";
function App() {
const [description,setDescription]=useState("")
const [news,setNews]=useState("")
const [id,setId]=useState(null)
const value=useSelector(state=>state.task)
const disp=useDispatch();
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [filter,setFilter] =useState(false)
  const [done,setDone]=useState(false)
return(<div>
  <center>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <table><tr><td><Form.Label style={{color:"red"}}>Description: </Form.Label></td>
        <td>  <input type="text" onChange={e=>setNews(e.target.value) } placeholder="set new description"/> </td></tr> </table>
        </Form.Group>
      </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="buttonAdd" variant="primary" onClick={()=> disp(todoAction.edittodo(id,news))}>
          Update
        </Button>
        </Modal.Footer>
      </Modal>
<input type="text" onChange={e=>setDescription(e.target.value)} /><Button onClick={()=>disp(todoAction.addtodo(description))}>Add Task</Button>
              <Button onClick={()=>{setFilter(true);setDone(true)}}>show complet</Button>
              <Button onClick={()=>{setFilter(true);setDone(false)}}>show not complet</Button>
              <Button onClick={()=>setFilter(false)}>show all</Button>

  {    !filter ? 
  value.map(el=>(<div key={el.id} ><div> <table className="tab"><tr><td> <h4 style={el.isdone? {textDecoration:"line-through"} :null}> {el.description}</h4></td>
  <td><Button variant="primary" onClick={()=>{setId(el.id);return handleShow()}}>edit</Button> 
  <Button variant="primary" onClick={()=>disp(todoAction.done(el.id,el.isdone))} >Done</Button> </td></tr> </table>  
  </div></div>)) 
  :
  done ? value.filter(todo=>todo.isdone===true).map(el=>(<div key={el.id} ><div> <table className="tab"><tr><td> <h4 style={el.isdone? {textDecoration:"line-through"} :null}> {el.description}</h4></td>
  <td><Button variant="primary" onClick={()=>{setId(el.id);return handleShow()}}>edit</Button> 
  <Button variant="primary" onClick={()=>disp(todoAction.done(el.id,el.isdone))} >Done</Button> </td></tr> </table>  
  </div></div>)) :
  value.filter(todo=>todo.isdone===false).map(el=>(<div key={el.id} ><div> <table className="tab"><tr><td> <h4 style={el.isdone? {textDecoration:"line-through"} :null}> {el.description}</h4></td>
  <td><Button variant="primary" onClick={()=>{setId(el.id);return handleShow()}}>edit</Button> 
  <Button variant="primary" onClick={()=>disp(todoAction.done(el.id,el.isdone))} >Done</Button> </td></tr> </table>  
  </div></div>)) }
  </center>
 </div>);
}

export default App;
