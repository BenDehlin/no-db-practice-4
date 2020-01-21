import React from 'react'
import Item from './Item'


export default function List(props){
  const {list, type, handleDelete} = props
  return(
    <div className = "list-view">
      {
        list.map(item => {
          return(
            <Item 
              key={item.id} 
              item={item} 
              type={type}
              handleDelete={handleDelete}  />
          )
        })
      }
    </div>
  )
}