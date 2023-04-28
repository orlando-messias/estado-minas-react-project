import Logo from '../assets/logo-estado-de-minas.png';
import BtnNavSide from '../assets/js-btn-nav-side.png';
import BtnWhatsapp from '../assets/btn-whatsapp.png';
import SeparatorHeader from '../assets/separator-header.png';
import BtnSectionsHeader from '../assets/btn-sections-header.png';
import BtnSearchHeader from '../assets/btn-search-header.png';
import EinsteinIcon from '../assets/einstein-icon.png';

import './styles.css';

function Header() {
  return (
    <header className='header-container'>
      <div className='left-content'>
        <img className='btn-nav-side' src={BtnNavSide} alt="Nav Side" />
        <img className='btn-sections-header' src={BtnSectionsHeader} alt="Botão Seções Topo da Página" />
        <img className='btn-search-header' src={BtnSearchHeader} alt="Botão Pesquisar Topo da Página" />
        <img src={Logo} className="sec" alt="Logo Estado de Minas" />
        <span className='section-name-header'>Política</span>
      </div>

      <div className='right-content'>
        <div className='btn-whatsapp'>
          <img src={BtnWhatsapp} alt="Botão Whatsapp Topo" />
        </div>
        <div className='button'>
          Assine
        </div>
        <div className='separator-header'>
          <img src={SeparatorHeader} alt="Separador Top" />
        </div>
        <div className='einstein-icon'>
          <img src={EinsteinIcon} alt="Ícone Einstein Topo" />
        </div>
      </div>
    </header>
  )
}

export default Header;