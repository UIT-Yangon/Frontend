import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const itemsData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
  { id: 11, name: 'Item 11' },
  { id: 12, name: 'Item 12' },
  { id: 13, name: 'Item 13' },
  { id: 14, name: 'Item 14' },
  { id: 15, name: 'Item 15' },
  { id: 16, name: 'Item 16' },
  { id: 17, name: 'Item 17' },
  { id: 18, name: 'Item 18' },
  { id: 19, name: 'Item 19' },
  { id: 20, name: 'Item 20' }
];

const PaginatedItems = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = itemsData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(itemsData.length / itemsPerPage);

  return (
    <div>
      <h1>Paginated Items</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <StyledPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default PaginatedItems;

const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  padding: 0;

  li {
    margin: 0 5px;
    cursor: pointer;

    a {
      padding: 8px 16px;
      text-decoration: none;
      color: #007bff;

      &.active {
        background-color: #007bff;
        color: white;
      }

      &.disabled {
        color: #ddd;
        cursor: not-allowed;
      }
    }
  }

  .break-me {
    cursor: default;
  }
`;
