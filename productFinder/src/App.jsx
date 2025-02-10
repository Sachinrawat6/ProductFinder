import React, { useEffect, useState } from 'react';
const API = "https://sachinrawat6.github.io/api/";

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

const handleSubmit = (e)=>{
    e.preventDefault();
    urlOpener();
    setQuery('');

} 

const urlOpener = ()=>{
  const product = data.find((curProduct)=> curProduct.style===parseInt(query));
  product?window.open(`https://www.myntra.com/jackets/qurvii%2b/qurvii-plus-size-fleece-longline-open-front-hooded-jacket-with-patchwork/${product.id}/buy`):setError(true);
}



  return (
    <div className="container  mx-auto my-10">
      <h1 className='text-center font-bold text-2xl'>Product Searcher</h1>
      <hr className='w-40 mx-auto mt-2 text-gray-300' />
      <form onSubmit={handleSubmit} className='flex flex-col  mt-10 container mx-auto'>
        <input type="text"
        className='border-1 border-gray-200 w-80 mx-auto p-4 shadow-xs outline-purple-400 rounded-xs'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        
        placeholder='Type style number...' />
        <button  
          className=' w-40 py-3 px-4 mx-auto mt-5 bg-purple-400 rounded text-[#f1f1f1] font-semibold cursor-pointer'
        > Search</button>


         {error?<p className='text-center mt-6 text-red-600 animate-bounce'>Style not found search again 😔 </p>:""} 
      </form>
      <footer>
        <p className='text-center xs:relative text-xs mx-auto absolute bottom-2  w-80 '>
        Copyright © 2025 Qurvii | All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
