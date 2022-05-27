import { useContext } from "react"
import { uData } from "../Context";

const CompD = () => {
    //const compName = useContext(uData);
    
    return (
        //useContext Consumer
        //<h1>Hello CompoD {compName}</h1>
        
        //Context Api - Consumer
        <uData.Consumer>
          {
            (test) => {
                return <h1>{test}</h1>;
            }
          }  
        </uData.Consumer>
    )
}

export default CompD