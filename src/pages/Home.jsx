import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([])
  async function fetchProductData(){
    setLoading(true)
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);

    } catch (error) {
      console.log("No Data found")
      setPost([]);
    }
    setLoading(false)
  }

  useEffect( () => {
    fetchProductData();
  },[])

  
  return (
    <div>
      {
        loading ? (<div><p>Loading...</p></div>) : posts.length>0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map((post)=>(
              <Product key={post.id} post={post}/>
            ))
          }
        </div>) : (<div><p>No Data found</p></div>)
      }
    </div>
  )
}

export default Home

