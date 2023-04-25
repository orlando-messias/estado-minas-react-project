import RightArrow from '../assets/nav-right-arrow.png';

import './styles.css';

function Navbar() {
  return (
    <nav>
      <div className='navbar-sup'>
        <span>
          Início
        </span>
        <img src={RightArrow} alt="Seta Direita Navbar" />
        <span>
          Política
        </span>
      </div>
    </nav>
  )
}

export default Navbar;