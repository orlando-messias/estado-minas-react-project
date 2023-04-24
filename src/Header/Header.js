import Logo from '../assets/logo-estado-de-minas.png';
import BtnNavSide from '../assets/js-btn-nav-side.png';

import './styles.css';

function Header() {
  return (
    <header>
      <div className='left-content'>
        <img src={BtnNavSide} alt="Nav Side" />
        <img src={Logo} className="sec" alt="Logo Estado de Minas" />
      </div>

      <div className='right-content'>
        <div className='button'>
            Assine
          </div>
      </div>
    </header>
  )
}

export default Header;