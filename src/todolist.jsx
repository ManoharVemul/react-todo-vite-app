import { useState } from "react";

const ToDoList = ()=>{
    const [inpu,setInpu] = useState("")
    const [listu,setListu] = useState([]);

const addHandler = ()=>{
    if(inpu.trim()){
    setListu([...listu,inpu])}
    setInpu("");
}
const removeHandler = (idd)=>{
setListu(listu.filter((_,inn)=>{
    idd != inn
}))
}

const removeAll = ()=>{
    setListu([])
}


    return (<>
    <input type="text" value={inpu} onChange={e=>setInpu(e.target.value)} />
    <button onClick={addHandler}>
        ADD
    </button>
    <button onClick ={removeAll}>
    Delete All
    </button>
    <ul>{listu.map((val,ind)=>{
        return<>
    <li key ={ind}>{val} <button onClick= {()=>{removeHandler(ind)} } >Delete</button></li>
        
        </>
    }

    )}</ul>
    
    </>)

}
export default ToDoList;
