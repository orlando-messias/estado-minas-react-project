import PubliSidebar01 from '../assets/publi-sidebar-01.png';
import PubliSidebar02 from '../assets/publi-sidebar-02.png';
import SeparatorSidebar from '../assets/separator-sidebar.png';
import PremiumIcon from '../assets/premium-icon.png';

import './styles.css';

const news = [
  {
    title: 'Mulher anuncia faxina em troca de refeição em BH e se surpreende com respostas',
    createdAt: '10:54 - 25/07/2019',
    premium: true,
  },
  {
    title: "'Um dos mais perigosos', diz delegado sobre homem que atirou em família de PM",
    createdAt: '15:57 - 25/07/2019',
    premium: false,
  },
  {
    title: 'Abastecimento de água será interrompido em BH no domingo; veja a lista dos bairros',
    createdAt: '17:26 - 24/07/2019',
    premium: false,
  },
  {
    title: 'Morre herdeiro da construtora OAS que infartou durante audiência na Justiça',
    createdAt: '15:35 - 25/07/2019',
    premium: true,
  },
  {
    title: 'Preso diz que deu acesso a dados hackeados ao editor do Intercept Brasil',
    createdAt: '13:00 - 25/07/2019',
    premium: false,
  },
];

function Sidebar() {
  return (
    <nav className='sidebar-container'>
      <img src={PubliSidebar01} alt="Publicidade Sidebar Superior" />
      <img className='separator-sidebar' src={SeparatorSidebar} alt="Separador da Sidebar Direita" />

      <section className='most-read-sidebar-section'>
        <p>MAIS LIDAS</p>
        <div className='most-read-sidebar-section-content'>
          {news.map(newsItem => (
            <div className='most-read-sidebar-section-box'>
              <div className='most-read-sidebar-info-01'>{newsItem.createdAt}</div>
              <div className='most-read-sidebar-info-02'>
                <a href='#'>
                  {newsItem.premium && <span className='premium-icon'><img src={PremiumIcon} alt="Notícia Premium" /></span>}
                  {newsItem.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className='publi-sidebar-bottom'>
        <img src={PubliSidebar02} alt="Publicidade Sidebar Inferior" />
      </div>
    </nav >
  )
}

export default Sidebar;