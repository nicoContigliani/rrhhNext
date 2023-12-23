// import React from 'react'

// const Pagination = (props: any) => {
//   const {
//     postsPerPage, totalPosts, paginate
//   } = props

//   const pageNumbers: any[] = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }


//   return (
//     <nav>
//       <ul className='pagination'>
//         {pageNumbers?.map(number => (
//           <li key={number} className='page-item'>
//             <button onClick={() => paginate(number)} className='page-link' >
//               {number}

//             </button>

//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

// export default Pagination

import React from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = (Array.from({ length: totalPages }, (_, index) => index + 1))

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;