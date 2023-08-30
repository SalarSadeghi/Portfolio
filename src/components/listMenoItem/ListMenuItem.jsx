import React from 'react'

function ListMenuItem({item,setMenuOpen}) {
  return (
    <li onClick={()=>setMenuOpen(false)}>
      <a href={item==='Home'?'#intro':`#${item.toLowerCase()}`}>{item}</a>
    </li>
  )
}

export default ListMenuItem
