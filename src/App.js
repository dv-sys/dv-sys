import './App.css';
import Layout from './Layout';
import Header from './Header';
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/productSlice';
import { STATUSES } from './store/productSlice';
import LoadingSpin from "react-loading-spin";

function App() {
  const dispatch = useDispatch();  
 
  const { data: products, status } = useSelector((state) => state.product);
  
  const [items, setItems] = useState([]);
  const [searchApiData,setSearchApiData] = useState([]);
  const [filterData,setFilterData] = useState("");
  const [visible,setVisible] = useState(5);  
 
  /*const GetProdDataFetch = async ()=>{
    try{
      const result = await fetch("https://fakestoreapi.com/products");
      const res = await result.json();
      setItems(res);
      setSearchApiData(res);
    }
    catch(err){
      // alert(err.message);
      toast.error('API Accessing error..!');
      return;
    }
  }*/

  /*const GetProdDataAxios = async ()=>{
    try{
      const result = await axios.get("https://fakestoreapi.com/products");
      const res = await result.data;
      setItems(res);
      setSearchApiData(res);
    }
    catch(err){
      // alert(err.message);
      toast.error('API Accessing error..!');
      return;
    }
  }*/

  useEffect(() => {
    //GetProdDataFetch();
    //GetProdDataAxios();
    dispatch(fetchProducts());  //use thunk
    setSearchApiData(products);
    setItems(products); 
  
  },[] )

  if (status === STATUSES.LOADING) {
    
    return <div style={{
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      width: '200px',
      height: '100px',
      margin: 'auto',
      }}><LoadingSpin /></div>; //<h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
      return <h2>Something went wrong!</h2>;
  }

  const handleSearch = (event) =>{
    //console.log('Values : ' , event.target.value)
    if(event.target.value === ''){
      setItems(products);  
    }
    else{
      const filterResult = products.filter((item) => { 
                              return item.title.toLowerCase().includes(event.target.value.toLowerCase());
                            }
                            )
     
      //console.log('filterResult:', filterResult);                      
      setItems(filterResult);
    }
    setFilterData(event.target.value); 
  }
  const showMoreItems = () => {
    setVisible((prevValue)=>prevValue + 5);
  }
  const proddet = items.length > 0 ? items : products 
  return (
    <>
    <div>
      <Header handlesearch={handleSearch} filterdata={filterData} />
      <ToastContainer /> 
          
      {   
        proddet
          .slice(0, visible)
          .map((value,i)=>
            <Layout key={i} val={value} /> 
          )
      }
        
    </div>
    <button className="loadmore" style={{width:'100%',marginTop:'20px'}} onClick={showMoreItems}>Show More</button>
    </>      
  );
}

export default App;