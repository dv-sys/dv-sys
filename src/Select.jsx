
function Select(props){
    const arr = ['Product1','Product2','Product3','Product4','Product5','Product6']  
    let filterData;
    if(props.selval.length > 0){
        console.log(props.selval);    
        filterData = arr.filter(item => !props.selval.includes(item));
    }
    else{
       filterData = arr; 
    }
    console.log(filterData);
    return(
        <>
           <div>
                <label><b>Product: &nbsp;</b></label>
                <select style={{width:'200px'}} onClick={props.clickHandle} onChange={props.changeHandle}>
                    {filterData.map((item) => <option>{item}</option>)}
                </select>
            </div>
        </>
    )
}

export default Select;