import React from 'react'
import MainContext from '../context/MainContext';
import Button from '../components/Button'
import { Link } from 'react-router-dom';

const ProductList = () => {
  const context: any = React.useContext(MainContext);

  console.log(context.loading);

  const {products} = context;
  return (
    <>
      {context.loading ? <p>Loading...</p> : products.map((item: any) => (
        <li key={item.link}>
          <img height='100px' src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <Link to={item.link}>
          <Button text='Ir a web' />
          </Link>
        </li>
      ))}
    </>
  )
}

export default ProductList