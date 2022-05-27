import Pdetaillayout from './Pdetaillayout';
import { useLocation } from "react-router-dom";

function Pdetail(){
    const location = useLocation();
    console.log(location);
    return (
        <>
            <h1>Product Detail</h1>
            <hr></hr>
            <Pdetaillayout propdata={location.state} />
        </>
    )

}

export default Pdetail;