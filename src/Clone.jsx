import { useState } from "react";
import Select from "./Select";

function Clone() {
    const [selVal,setSelVal] = useState([]);

    const changeHandle = (e) => {
        setSelVal([...selVal,e.target.value]);
    }

    const clickHandle = (e) => {
    }
    
    const [elem, setElem] = useState([<Select key={0} changeHandle={changeHandle} clickHandle={clickHandle} selval={selVal}  />]);
    
    const cloneElem = (e) => {
        setElem([...elem , <Select key={elem.length} changeHandle={changeHandle} clickHandle={clickHandle} selval={selVal}  />]);
    }
    
    return (
        <>
            <h1>Element Clone</h1>
            <hr />
            <div>
                {elem}
                <span><button onClick={cloneElem}><b> + </b></button></span>
            </div>
        </>
    )
}

export default Clone;