import React, { useEffect, useState } from 'react';
const API = `https://inventorybackend-m1z8.onrender.com/api/product`;


const App = () => {
  const [data, setData] = useState([]);
  const[query,setQuery] = useState('');
  const[error,setError] = useState(false);

  const fetchData = async () => {
    const response = await fetch(API);
    const response_data = await response.json();
    setData(response_data);
    
    
  };

  useEffect(() => {
    fetchData(); // Call the fetchData function here
  }, []); // Empty array ensures it only runs once when the component mounts

//  handle  submit


const urlOpener = ()=>{
  const product = data.find((curProduct)=> curProduct.style_code==query);
  product?window.open(`https://www.myntra.com/jackets/qurvii%2b/styleNumber=${product?.style_code}/${product.style_id}/buy`):setError(true);
}

const viewRackSpace = ()=>{
  const rackSpace = data.find((curProduct)=>curProduct.style_code==query);
  return rackSpace?.rack_space || "No Rack Space";
}

// query.length==5?viewRackSpace():"";



const handleSubmit = (e)=>{
  e.preventDefault();
  urlOpener();
  setQuery('');

} 


  return (
    <div className="container  mx-auto my-10">
      <h1 className='text-center font-bold text-2xl'><span className='text-blue-400'>Product</span> Searcher</h1>
      
      <hr className='w-60 mx-auto mt-2 text-gray-300' />
      <p className={`${query?.length>4?'text-center mt-4 w-40  mx-auto py-4':""}`}>  {query?.length==5?`Rack Space : ${viewRackSpace() || "Default"}`:""} </p>
      <form onSubmit={handleSubmit} className='flex flex-col  mt-10 container mx-auto'>
        <input type="text"
        className='border-1 border-gray-200 w-80 mx-auto p-4 shadow-xs outline-blue-400 rounded-full'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        
        placeholder='Type style number...' />
        <button  
          className=' w-40 py-3 px-4 mx-auto mt-5 bg-blue-500 rounded text-[#f1f1f1] font-semibold cursor-pointer hover:scale-[.9] duration-75 ease-in'
        > Search</button>


         {error?<p className='text-center mt-6 text-red-600 animate-bounce'>Style not found search again 😔 </p>:""} 
         
      </form>
      {/* <button onClick={viewRackSpace}>View Rack Space</button> */}
      <footer>
        <p className='text-center md:mt-160 text-xs mx-auto mt-100 w-80 '>
        Copyright © 2025 Qurvii | All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
