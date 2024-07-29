import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Lists from './components/Lists';
import SearchBar from './components/Search';
import './App.css';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Title from './components/Title';

const App = () => {
  const [filters, setFilters] = useState({});
  const [Data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState(filters.title || '');
  const limit = 5;

  const fetchPost = async () => {
    let url = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?';

    if (debouncedSearch && debouncedSearch.length > 2) {
      url += `search=${debouncedSearch}&`;
    }

    if (filters.date) {
      url += `date=${filters.date}&`;
    }

    try {
      const response = await fetch(url);
      const result = await response.json();
      setFullData(result);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters(prevFilters => ({ ...prevFilters, title: debouncedSearch }));
    }, 300);

    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  useEffect(() => {
    fetchPost();
  }, [filters]);

  useEffect(() => {
    let filteredData = fullData;

    if (filters.title) {
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.date) {
      filteredData = filteredData.filter(item => item.date === filters.date);
    }

    if (filters.type && filters.type !== '') {
      filteredData = filteredData.filter(item => item.type === filters.type);
    }

    setData(filteredData);
  }, [fullData, filters]);

  const lastPostIndex = currentPage * limit;
  const firstPostIndex = lastPostIndex - limit;
  const currentData = Data.slice(firstPostIndex, lastPostIndex);

  const handleFilterChange = (newFilters) => {
    if (newFilters.title !== undefined) {
      setDebouncedSearch(newFilters.title);
    } else {
      setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    }
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <Header />
      <Title />
      <SearchBar onFilterChange={handleFilterChange} data={fullData} />
      <Lists data={currentData} />
      <Pagination totalPosts={Data.length} limit={limit} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
};

export default App;