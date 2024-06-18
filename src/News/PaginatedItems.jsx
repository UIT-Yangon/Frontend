import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
  { id: 20, name: 'Item 20' },
  { id: 21, name: 'Item 21' },
  { id: 22, name: 'Item 22' },
  { id: 23, name: 'Item 23' },
  { id: 24, name: 'Item 24' },
  { id: 25, name: 'Item 25' },
  { id: 26, name: 'Item 26' },
  { id: 27, name: 'Item 27' },
  { id: 28, name: 'Item 28' },
  { id: 29, name: 'Item 29' },
  { id: 30, name: 'Item 30' },
  { id: 31, name: 'Item 31' },
  { id: 32, name: 'Item 32' },
  { id: 33, name: 'Item 33' },
  { id: 34, name: 'Item 34' },
  { id: 35, name: 'Item 35' },
  { id: 36, name: 'Item 36' },
  { id: 37, name: 'Item 37' },
  { id: 38, name: 'Item 38' },
  { id: 39, name: 'Item 39' },
  { id: 40, name: 'Item 40' },
  { id: 41, name: 'Item 41' },
  { id: 42, name: 'Item 42' },
  { id: 43, name: 'Item 43' },
  { id: 44, name: 'Item 44' },
  { id: 45, name: 'Item 45' },
  { id: 46, name: 'Item 46' },
  { id: 47, name: 'Item 47' },
  { id: 48, name: 'Item 48' },
  { id: 49, name: 'Item 49' },
  { id: 50, name: 'Item 50' },
  { id: 51, name: 'Item 51' },
];

const PaginatedItems = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // limit for items in each page

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;  // starting point
  const currentItems = itemsData.slice(offset, offset + itemsPerPage); // items in current page
  const pageCount = Math.ceil(itemsData.length / itemsPerPage); // total pages

  const categories = [
    {title: 'All', count: 10},
    {title: 'New', count: 3},
    {title: 'Old', count: 7},
  ]

  const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    }

  return (
    <div className='pt-[56px] pb-[72px] flex flex-col gap-[56px]'>
      <div className="Categories flex flex-row w-[70%] lg:w-[40%] xl:w-[25%]  justify-between items-center mb-2">
          <p className="text-[#1c1d20] opacity-50 text-[16px] md:text-[20px]">Filter By:</p>
          {categories.map((category,index) => (
            <div className="relative cursor-pointer" key={index} onClick={()=>handleCategoryChange(category.title)}>
              <p className="text-[#1c1d20] text-[16px] md:text-[20px]" style={{ opacity: selectedCategory === category.title ? 1 : 0.5 }}> {category.title}</p>
              <span className="text-[#1c1d20] text-[10px] md:text-[12px] absolute" style={{left:'100%',top:0, opacity: selectedCategory === category.title ? 1 : 0.5 }}>{category.count}</span>
            </div>
            
          ))}
        </div>
      <ul className='flex flex-row sm:justify-between justify-center w-full items-center flex-wrap sm:gap-y-[20px] gap-y-[30px]'>
        {currentItems.map((item) => (
          <li key={item.id}>
            <div className='flex flex-col gap-[20px]'>
                <div className='xl:w-[550px] xl:h-[380px] w-[300px] h-[350px] rounded-[32px] bg-[#d9d9d9]'></div>
                <div className='flex flex-col gap-[8px] '>
                    <div className='flex items-center'>
                        <p className='text-[#3798a6] mt-[-6px] p-[5px]'>.</p>
                        <p className='text-[#1c1d20] opacity-50 text-[16px] ps-[5px]'>News type</p>
                    </div>
                    <h5 className='text-[#1c1d20] text-[20px] ps-[5px]'><Link reloadDocument to="/about/blog" id="navigation" >{item.name}</Link></h5>
                </div>
            </div>
          </li>
        ))}
      </ul>
      <StyledPaginate
        previousLabel={<FontAwesomeIcon icon={faArrowLeft}/>}
        nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
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
  justify-content: center;

  li {
    margin: 0 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 50%;

    &.active a{
        background-color: #3798a6;
        opacity: .7;
        color: white;
    }

    @media (max-width: 640px) {
      margin: 0 1px;
    }

    a {
      width: 40px;
      height: 40px;
      text-decoration: none;
      color: #1c1d20;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding-top: 2px;
      

      &:hover {
        background: #3798a6;
        color: white;
        transition: all .3s ease-in-out;
      }

      &.disabled {
        color: #ddd;
        cursor: not-allowed;
      }

      @media (max-width: 640px) {
        width: 25px;
        height: 25px;
        font-size: 12px;
        
      }
    }
  }

  .break-me {
    cursor: default;
  }
`;
