import RightArrow from '../assets/nav-right-arrow.png';

import './styles.css';

function Navbar() {
  return (
    <nav>
      <span>
        Início
      </span>
      <img src={RightArrow} alt="Seta Direita Navbar" />
      <span>
        Política
      </span>
    </nav>
  )
}

export default Navbar;