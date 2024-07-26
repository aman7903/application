import React from 'react';

const SearchBar = ({ onFilterChange, data }) => {


  const uniqueTypes = [...new Set(data.map(item => item.type))];
  console.log("type",uniqueTypes)

  return (
    <div className="filter-bar">
      <div className='left-part'>
      <input type="date" onChange={(e) => {
        const dateValue = e.target.value;
        onFilterChange({ date: dateValue });
      }} />
       <select onChange={(e) => onFilterChange({ type: e.target.value })}>Filter by Type
        <option value=''>All Types</option>
        {uniqueTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}

      </select>
      </div>
      <div className='right-part'>

      <input type="text" placeholder="Search by title" onChange={(e) => onFilterChange({ title: e.target.value })} />
      </div>
     
     

    </div>
  );
};

export default SearchBar;
