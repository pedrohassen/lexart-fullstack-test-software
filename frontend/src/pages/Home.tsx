import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import { Dropdown } from '../components/Dropdown';
import MainContext from '../context/MainContext';
import ProductList from '../components/ProductList';
import { scrapRequest } from '../requests/fetch';

export const Home = () => {
  
  return (
    <>
      <Dropdown />
      <SearchBar />
      <ProductList />
    </>
  )
}
