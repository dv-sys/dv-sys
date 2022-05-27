import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardLayout from './CartLayout';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Cart = () => {
    const product = useSelector((state)=>state.cart.cart)
    console.log('Cart Item : ' , product);
    let tprice = 0
    product.map((prod)=>tprice += prod.price);
    return (
        <>  
            <div style={{width:'100%'}}>
                <div style={{float:'left',width:'60%',marginLeft:'10px'}}><h1>My Cart</h1></div>
                <div style={{float:'left',textAlign:'right',width:'30%',padding:'10px'}}><Button className='btn btn-warning'><Link to='/'>Back to Main</Link></Button></div>
            </div>
            <br/><br/> 
            <hr/>
            <div style={{float:'right',marginRight:'20px'}}><h2>Total Item : {product.length > 0 ? product.length : 0}</h2><h4 style={{color:'green'}}>Total Price: {tprice.toFixed(2)}</h4></div>    
            <Card className="mb-3" style={{ width: '99%', marginLeft:'5px'}}>
                <Card.Body style={{backgroundColor:'lightgrey'}}>
                    <div style={{width:'100%',fontWeight:'bold',fontSize:'14pt'}}>
                        <div style={{width:'70%',float:'left'}}>Title</div>
                        <div style={{width:'10%',float:'left'}}>Qty</div>
                        <div style={{width:'10%',float:'left'}}>Price</div>
                        <div style={{width:'10%',float:'left'}}>
                        </div>   
                    </div>
                </Card.Body>
            </Card>

            {
                product.map((prod,i)=><CardLayout key={i} prod={prod} />)
            }
            
        </>
    );
}

export default Cart;