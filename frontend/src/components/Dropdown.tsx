import React from 'react'
import MainContext from '../context/MainContext'

export const Dropdown = () => {
  const context: any = React.useContext(MainContext);

  const dropWeb = ['Todas', 'Mercado Livre', 'Buscapé']
  const dropCategory = ['Geladeira', 'TV', 'Celular']
  
  return (
    <>
      <select
        value={context.dropWebState}
        onChange={({target}) => {context.setDropWebState(target.value)}}
      >
        {dropWeb.map((item: any) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
      <select
        value={context.dropCategoryState}
        onChange={({target}) => {context.setDropCategoryState(target.value)}}
      >
        {dropCategory.map((item: any) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          )
        )}
      </select>
    </>
  )
}
