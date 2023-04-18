import React from 'react'
import Button from './Button'
import MainContext from '../context/MainContext'

const SearchBar = () => {
  const context: any = React.useContext(MainContext);
  
  const handleClick = async () => {
      context.setLoading(true);
      const response = await fetch('http://localhost:3001/scrap', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: context.text,
          web: context.dropWebState,
          category: context.dropCategoryState
        })
      })
      const products = await response.json();
      console.log(products);      
      context.setLoading(false);
      context.setProducts(products);
  }
  
  return (
    <>
      <input
        type='text'
        placeholder='Search...'
        value={context.text}
        onChange={(e) => context.setText(e.target.value)}
      />
      <Button
      type='button'
      onClick={handleClick}
      text='Search' />
    </>
  )
}

export default SearchBar