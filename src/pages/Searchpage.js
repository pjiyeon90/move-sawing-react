import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/search.scss'

const SearchPage = () => {
  const location = useLocation();
  const { results } = location.state || { results: null }; // state에서 결과 가져오기

  return (
    <div className='searchwrap'>
      <h1>검색 결과 <span>20건</span></h1>
      
    </div>
  );
}

export default SearchPage;