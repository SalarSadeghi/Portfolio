import { Email, PhoneIphone } from '@mui/icons-material'
import './topbar.scss'

function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={menuOpen? 'topbar active': 'topbar'}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro"  className='logo'>Salar CV</a>
          <div className="itemContainer">
            <a href="tel:+989217440127" className='mailLink'>
            <PhoneIphone className='icon'/>
            <span>+989217440127</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href='mailto:salar.sadeghi41@gmail.com' className='mailLink'>
            <Email className='icon'/>
            <span >salar.sadeghi41@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Topbar
