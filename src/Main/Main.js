import Twitter from '../assets/social-twitter.png';
import Whatsapp from '../assets/social-whatsapp.png';
import Facebook from '../assets/social-facebook.png';
import MainImage from '../assets/main-image.png';

import './styles.css';

function Main() {
  return (
    <main className='main-container'>
      <div className='head-container'>
        <span className='news-category'>OSCAR 2021</span>
        <h1>Repercussão: 'Bacurau' recebe apoio em nova chance de indicação ao Oscar</h1>
        <h2>
          Após dois anos, longa voltou a ser elegível para concorrer ao Oscar 2021 e causou grande repercussão nas redes e na imprensa nacional e internacional
        </h2>
      </div>
      <section className='author'>
        <div className='author-info'>
          <span>Tamaki Ryushi</span>
          <span className='published-at'>02/02/2021 08:22</span>
        </div>
        <div className='social-media'>
          <img src={Twitter} alt="Twitter" />
          <img src={Whatsapp} alt="Whatsapp" />
          <img src={Facebook} alt="Facebook" />
        </div>
      </section>
      <article>
        <figure>
          <img src={MainImage} alt="Imagem Principal da Notícia" />
          <figcaption>
            Após dois anos, longa voltou a ser elegível para concorrer ao Oscar 2021 e causou grande repercussão
            <span>(foto: Divulgação)</span>
          </figcaption>
        </figure>
      </article>
      <aside>
        <p>Content aside here</p>
      </aside>
    </main>
  )
}

export default Main;