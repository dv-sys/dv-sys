import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Header(props){
    const prod = useSelector((state)=>state.cart.cart);
    //console.log(prod);
    return (
        <>  
            <div style={{width:'100%'}}>
                <div style={{width:'62%',float:'left'}}><h1>Products</h1></div>
                <div style={{width:'35%',float:'left',marginTop:'25px'}}>
                    <input type='text' placeholder='Search..' value={props.filterdata} onChange={props.handlesearch}></input>
                    <div className='card' style={{float:'right',padding:'5px',backgroundColor:'lightgrey'}}>
                    <b><Link to='/Cart'>Cart: {prod.length}</Link></b></div>
                </div>
            </div>
            <br/>
            <br/>    
            <hr/>
        </>
    );

}

export default Header;