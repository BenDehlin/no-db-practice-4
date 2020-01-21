import React from 'react'


export default function(props){
  const {item, type, handleDelete} = props
  const list = []
  for(let key in item){
    if(key !== 'id' && !Array.isArray(item[key]) && (typeof(item[key]) !== 'object')){
      list.push(<h4 key={key}>{item[key]}</h4>)
    }
    else if(Array.isArray(item[key])){
      for(let i = 0; i < item[key].length; i++){
        list.push(<h4 key={i}>{item[key]}</h4>)
      }
    }
    else if(key !== 'id' && typeof(item[key] === 'object')){
      list.push(<h4 key={key}>{key}:</h4>)
      for(let key2 in item[key]){
        list.push(<p key={`${key2}-${item[key][key2]}`}>{item[key][key2]}</p>)
      }
    }
  }
  return(
    <div className = "item-view">
      {list}
      <button>Edit</button>
      <button
        onClick={() => handleDelete(item.id, type)}
      >Delete</button>
    </div>
  )
}