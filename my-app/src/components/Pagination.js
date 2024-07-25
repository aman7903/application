


// const Pagination=({totalPosts,limit,setCurrentPage})=>{

//     let page=[];
//     for(let i=1;i<=Math.ceil(totalPosts/limit); i++){

//         page.push(i);
//     }

//     return(
//         <>
//         {
//             page.map((page,index)=>{
//                 return <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
//             })  
//         }
//         </>
//     )
// }

// export default Pagination;


import React from 'react';

const Pagination = ({ totalPosts, limit, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalPosts / limit);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='page'>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
