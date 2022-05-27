import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addCart } from './store/cartSlice';

function Layout(props){
    const dispatch = useDispatch();
    const {id,title,image,price} = props.val; 
    let navigate = useNavigate();
    
    function GetDetail(){
        navigate('/Pdetail',{state:props});
    }

    const AddtoCartHandle = (product) => {
        dispatch(addCart(product));
    }

    return (
        <>
            <div style={{ width: '18rem', marginLeft: '70px', marginTop:'20px', float: 'left', contentJustify: 'center'}}>
                <Card >
                    <Card.Img variant="top" onClick={GetDetail} style={{objectFit: 'cover',width: '100%',height: '15vw', cursor: 'pointer'}} src={image} />
                    <Card.Body>
                        <Card.Title style={{objectFit: 'cover',width: '100%',height: '5.5vw'}}>{title}</Card.Title>
                        <Button variant="primary" onClick={()=>AddtoCartHandle(props.val)} >Add to Cart</Button><span style={{color:'red',fontWeight:'bold'}}>  MRP: <i>{price}</i></span>
                    </Card.Body>
                </Card>
            </div>
        </>
    );

}

export default Layout