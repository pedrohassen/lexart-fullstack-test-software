import React, { useState } from 'react';
import MainContext from '../context/MainContext';

const MainProvider = ({children}: any) => {
  const [text, setText] = useState('');
  const [dropWebState, setDropWebState] = useState('Todas');
  const [dropCategoryState, setDropCategoryState] = useState('Geladeira');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const value = {
    text,
    setText,
    dropWebState,
    setDropWebState,
    dropCategoryState,
    setDropCategoryState,
    products,
    setProducts,
    loading,
    setLoading,
  };
  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider