import RightArrow from '../assets/nav-right-arrow.png';

import './styles.css';

function Navbar() {
  return (
    <nav>
      <div className='navbar-top'>
        <span>
          <a href="#">Início</a>
        </span>
        <img src={RightArrow} alt="Seta Direita Navbar" />
        <span>
          <a href="#">Política</a>
        </span>
      </div>
    </nav>
  )
}

export default Navbar;