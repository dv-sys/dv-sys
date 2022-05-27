import CompA from "./components/CompA"
import {createContext} from 'react'

const uData = createContext();    
const Context = () => {
    return(
        <uData.Provider value={"Testing UseContext"}>
        <CompA />
        </uData.Provider>    
    )
}

export default Context;
export { uData };