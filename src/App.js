import React, { useEffect } from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import {apiUrl, filterData, /*fit*/}  from "./data"
import {/*ToastContainer*/toast} from 'react-toastify';
import { useState } from "react";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  },[])

  return (
  <div className="min-h-screen flex flex-col">
    <div>
      <Navbar/>
    </div>
    <div className="bg-[#002B5B]">
      <div>
        <Filter filterData = {filterData}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h[50vh]">
        {
          loading?(<spinner/>) : (<Cards courses = {courses}/>)
        }
      </div>
    </div>
  </div>
)};

export default App;