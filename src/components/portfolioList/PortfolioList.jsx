import './portfolioList.scss'

function PortfolioList({item, selected, setSelected}) {
   
  return (
    <li className={item.id === selected ? 'portfolioList active' : 'portfolioList'} onClick={()=>setSelected(item.id)}>
      {item.title}
    </li>
  )
}

export default PortfolioList
