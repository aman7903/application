import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import Lists from './components/Lists';
import SearchBar from "./components/Search"
import './App.css';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Title from './components/Title'

const App = () => {
  const [filters, setFilters] = useState({});
  const [Data,setData]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const limit=5;

  const fetchPost = async () => {
    let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?`;
    if(filters.title){
      if (filters.title!="") {
        url += `search=${filters.title}`;
      }
      else if(filters.title===''){
        url=`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?`
      }

    }
    if (filters.date) {
      
      url += `date=${filters.date}`;
    }
    if (filters.type) {
      url += `type=${filters.type}`;
    }
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(()=>{
    fetchPost()
  },[filters, currentPage])

  const lastPostIndex=currentPage*limit;
  const firstPostIndex=lastPostIndex-limit;
  const currentData=Data.slice(firstPostIndex,lastPostIndex)

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    console.log("fil",filters)
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <Header />
      <Title/>
      <SearchBar onFilterChange={handleFilterChange} data={Data}/>
      <Lists data={currentData} />
      <Pagination totalData={Data.length} limit={limit} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Footer/>
    </div>
  );
};

export default App;
