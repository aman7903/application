// import React, { useState, useEffect } from 'react';
// import List from "./List"
// import { fetchRetreats } from '../services/api';

// const Lists = ({ filters }) => {
//   const [retreats, setRetreats] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchRetreats(filters, page).then(data => {
//       console.log('API Response:', data);

//       setRetreats(data);
//       // Assuming the API provides the total number of pages or items
//       setTotalPages(Math.ceil(data.totalItems / data.limit));
//     });
//   }, [filters, page]);

//   const handleNextPage = () => {
//     if (page < totalPages) setPage(prevPage => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (page > 1) setPage(prevPage => prevPage - 1);
//   };

//   return (
//     <div>
//       <div className="retreat-list">
//         {/* {retreats.map(retreat => (
//           <List key={retreat.id} {...retreat} />
//         ))} */}
//       </div>
//       <div className="pagination">
//         <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
//         <span>Page {page} of {totalPages}</span>
//         <button onClick={handleNextPage} disabled={page === totalPages}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Lists;


import React, { useEffect, useState } from 'react';
import List from './List';

const Lists = ({data}) => {
  console.log("kkk",data)
  if (data.length === 0) {
    return <p>No retreats found. Please try adjusting your search criteria.</p>;
  }
  
  return (
    <div className='retreat-container'>
      
        {data.map((retreat,id) => (
          <List key={id} retreat={retreat}/>
        ))}
    </div>
  );
};

export default Lists;