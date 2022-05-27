import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Pdetaillayout(props){
    console.log('Dv : ' , props);
    const navigation = useNavigate();
    const Backtomain = () =>{
        navigation('/',{state:{flag:true}});
    }    
    return(
    <>  
        <div><button onClick={Backtomain}>Back to Main Page</button></div>
        <Card style={{ width: '99%', margin:'10px' }}>
        <div style={{border:'1px solid black',width:'100%'}}>
            <div style={{width:'20%',float:'left'}}>
                <Card.Img variant="top" style={{width:'200px'}} src={props.propdata.val.image} /> 
            </div>
            <div style={{width:'65%',float:'left', marginTop:'50px'}}>
                <Card.Body style={{float:'left',width:'70%'}}>
                    <Card.Title>{props.propdata.val.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">MRP: {props.propdata.val.price}</Card.Subtitle>
                    <Card.Text>
                        {props.propdata.val.description}
                    </Card.Text>
                    <Card.Link href="#">Add to Cart</Card.Link>
                    <Card.Link href="#">Buy</Card.Link>
                </Card.Body>
            </div>
        </div>


        </Card>
    </>
    );
}

export default Pdetaillayout;