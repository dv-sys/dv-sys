import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeCart } from './store/cartSlice';

const CartLayout = (props) => {
    const {id,title,price,description,image} = props.prod;
    const dispatch = useDispatch();
   
    const removeCartHandle = (productid) => {
        dispatch(removeCart(productid));
    }

    return (
        <>
            <Card className="mb-3" style={{ width: '99%', marginLeft:'5px'}}>
                <Card.Body>
                    <div style={{width:'100%'}}>
                        <div style={{width:'70%',float:'left'}}>
                            <b>{title}</b>
                            <div><img src={image} style={{height:'80px'}} />
                    </div>
                            <div style={{fontSize:'9pt',color:'grey',width:'70%'}}>{description}</div>
                        </div>
                        <div style={{width:'10%',float:'left'}}>1</div>
                        <div style={{width:'10%',float:'left'}}>{price}</div> 
                        <div style={{width:'10%',float:'left'}}>
                            <Button variant='danger' onClick={()=>removeCartHandle({id})}>Remove #{id}</Button>
                        </div>   
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CartLayout;