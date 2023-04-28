import React from 'react';
import PubliMobile01 from '../assets/publi-mobile-01.png';
import PubliMobile02 from '../assets/publi-mobile-02.png';
import PubliDesktop01 from '../assets/publi-desktop-01.png';
import PubliDesktop02 from '../assets/publi-desktop-02.png';
import ClockIcon from '../assets/clock-icon.png';
import CameraIcon from '../assets/camera-icon.png';
import TextToSpeech from '../assets/text-to-speech.png';
import TextToSpeechMobile from '../assets/text-to-speech-mobile.png';
import GoogleNews from '../assets/google-news.png';
import Twitter from '../assets/social-twitter.png';
import Whatsapp from '../assets/social-whatsapp.png';
import Facebook from '../assets/social-facebook.png';
import MainImage from '../assets/main-image.png';
import LogoGoogleNews from '../assets/google-news-2.png';
import SeparatorFooter from '../assets/separator-footer.png';
import SeparatorSection from '../assets/separator-section.png';
import Sidebar from '../Sidebar/Sidebar';

import './styles.css';

const news = [
  {
    title: 'Oscar 2022: premiação ganha nova data para o próximo ano',
    createdAt: '08:57 - 10/06/2020',
    src: './news-images/news-img-01.png'
  },
  {
    title: 'O novo trailer de Eternos é tudo o que você precisava para entrar no hype da Marvel',
    createdAt: '08:57 - 10/06/2020',
    src: './news-images/news-img-02.png'
  },
  {
    title: 'Netflix fecha parceria com a Amblin, produtora de Steven Spielberg',
    createdAt: '08:57 - 10/06/2020',
    src: './news-images/news-img-03.png'
  }
];

function Main() {

  return (
    <main className='main-container'>
      <section className='head-container'>

        <figure className='publi-mobile-top'>
          <img src={PubliMobile01} alt="Publicidade Mobile Topo" />
        </figure>

        <span className='news-category'>OSCAR 2021</span>

        <h1>Repercussão: 'Bacurau' recebe apoio em nova chance de indicação ao Oscar</h1>

        <h2>
          Após dois anos, longa voltou a ser elegível para concorrer ao Oscar 2021 e causou grande
          repercussão nas redes e na imprensa nacional e internacional
        </h2>

        <figure className='publi-desktop-sup'>
          <div className='publi-desktop-box'>
            <img src={PubliDesktop01} alt="Publicidade Desktop Topo" />
          </div>
        </figure>

      </section>

      <section className='section-news'>
        <div>
          <section className='author'>

            <div className='author-info'>
              <span>Tamaki Ryushi</span>
              <div className='published-at-box'>
                <span><img src={ClockIcon} alt="Ícone Relógio" /></span>
                <span className='published-at'>02/02/2021 08:22</span>
              </div>
            </div>
            <div className='sharing'>
              <div className='social-media'>
                <img src={Twitter} alt="Twitter" />
                <img src={Whatsapp} alt="Whatsapp" />
                <img src={Facebook} alt="Facebook" />
              </div>
              <a
                href="https://news.google.com/publications/CAAqBwgKMKis8AIwoKUi?hl=pt-BR&gl=BR&ceid=BR%3Apt-419"
                target="_blank"
              >
                <img src={GoogleNews} alt="Link siga EM no Google News" />
              </a>
            </div>

          </section>

          <article>

            <figure>
              <img src={MainImage} alt="Imagem Principal da Notícia" />
              <figcaption>
                <div><img className='figure-cam' src={CameraIcon} alt="Câmera Ícone" /></div>
                <div>
                  Após dois anos, longa voltou a ser elegível para concorrer ao Oscar 2021 e causou grande repercussão
                  <p>(foto: Divulgação)</p>
                </div>
              </figcaption>
            </figure>

            <div className='text-to-speech-mobile'>
              <img src={TextToSpeechMobile} alt="Ouça a notícia" />
            </div>

            <div className='text-to-speech'>
              <img src={TextToSpeech} alt="Ouça a notícia" />
            </div>

            <div>
              <p>
                A notícia de que o filme Bacurau (2019), dirigido por Kleber Mendonça Filho e Juliano Dornelles, voltou a ser
                elegível para concorrer ao Oscar 2021 tem causado grande repercussão nas redes e na imprensa nacional e
                internacional. Na última sexta-feira (29/1), a distribuidora independente Vitrine Filmes anunciou que o filme
                está registrado no catálogo do Academy Screening Room. Essa é a plataforma de acesso exclusivo aos membros da
                Academia, responsáveis pela seletiva do prêmio. A lista final dos filmes selecionados será divulgada em 15 de
                fevereiro. O filme poderá concorrer às principais categorias, exceto Melhor Filme Estrangeiro.
              </p>

              <img src={SeparatorSection} alt="Linha Seção" />

              <section className='read-more-section'>
                <p>LEIA MAIS</p>
                <div className='read-more-section-all-content'>
                  {news.map(newsItem => (
                    <div className='read-more-section-box'>
                      <img src={newsItem.src} alt='Imagem Notícia Seção Leia Mais' />
                      <div className='read-more-info'>
                        <div className='read-more-info-01'>{newsItem.createdAt}</div>
                        <div className='read-more-info-02'><a href='#'>{newsItem.title}</a></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <img src={SeparatorSection} alt="Linha Seção" />

              <h3>Repercussão</h3>

              <p>
                Fãs, veículos de imprensa e responsáveis pela produção de Bacurau têm usado as redes sociais para comemorar a
                novidade. O anúncio inicia uma nova carreira para o longa pernambucano na corrida pelo Oscar este ano, já que
                ficou de fora da edição de 2020.
              </p>

              <p>
                Nas redes sociais, o cineasta Kleber Mendonça Filho comemorou a visibilidade do filme. “Eu fico feliz com
                Bacurau sendo visto no Brasil e no mundo, não importa aonde”, escreveu. Em outra postagem, feita neste
                domingo (31/1), com foto da capa do jornal The New York Times, o diretor destacou o apoio da imprensa e
                crítica internacional.
              </p>

              <figure className='publi-mobile-bottom'>
                <img src={PubliMobile02} alt="Publicidade Mobile Inferior" />
              </figure>

              <figure className='publi-desktop-bottom'>
                <div className='publi-desktop-bottom-box'>
                  <img src={PubliDesktop02} alt="Publicidade Desktop Inferior" />
                </div>
              </figure>

              <h3>Corrida pelo Oscar</h3>

              <p>
                Essa é uma nova chance para o longa pernambucano, que ficou de fora da edição do ano passado da grande
                celebração do cinema mundial. Na ocasião, a Academia Brasileira de Cinema (ABC) indicou o filme A vida
                invisível, de Karim Aïnouz, como título para representar o país. Este ano, a ABC apoia a candidatura de
                Babenco: alguém tem que ouvir o coração e dizer: parou, de Bárbara Paz, documentário de arte sobre obra
                a vida do cineasta Hector Babenco.
              </p>

              <p>
                Por não estar sendo indicado por uma agência internacional, no caso a ABC, Bacurau está elegível para todas
                as categorias de filmes de ficção, como Melhor Filme, Direção, Atriz Coadjuvante, Ator Coadjuvante e Melhor
                Roteiro Original, exceto para a de Melhor Filme em Língua Estrangeira. A distribuidora americana Kino
                Lorber está à frente da campanha.
              </p>
            </div>

            <footer>
              <p>Fique sempre bem informado.</p>
              <img className='separator-footer' src={SeparatorFooter} alt="Linha Rodapé" />
              <div>
                <span>SIGA O ESTADO DE MINAS NO</span>
                <a
                  href="https://news.google.com/publications/CAAqBwgKMKis8AIwoKUi?hl=pt-BR&gl=BR&ceid=BR%3Apt-419"
                  target="_blank"
                >
                  <img src={LogoGoogleNews} alt="Link siga EM no Google News" />
                </a>
              </div>
            </footer>

          </article>

        </div>

        <Sidebar />

      </section>

    </main>
  )
}

export default Main;