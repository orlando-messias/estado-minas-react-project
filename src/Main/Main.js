import Twitter from '../assets/social-twitter.png';
import Whatsapp from '../assets/social-whatsapp.png';
import Facebook from '../assets/social-facebook.png';
import MainImage from '../assets/main-image.png';
import LogoGoogleNews from '../assets/google-news.png';
import SeparatorFooter from '../assets/separator-footer.png';

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

        <div>
          <p>
            A notícia de que o filme Bacurau (2019), dirigido por Kleber Mendonça Filho e Juliano Dornelles, voltou a ser
            elegível para concorrer ao Oscar 2021 tem causado grande repercussão nas redes e na imprensa nacional e
            internacional. Na última sexta-feira (29/1), a distribuidora independente Vitrine Filmes anunciou que o filme
            está registrado no catálogo do Academy Screening Room. Essa é a plataforma de acesso exclusivo aos membros da
            Academia, responsáveis pela seletiva do prêmio. A lista final dos filmes selecionados será divulgada em 15 de
            fevereiro. O filme poderá concorrer às principais categorias, exceto Melhor Filme Estrangeiro.
          </p>

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
            <img src={LogoGoogleNews} alt="Logo Google News" />
          </div>
        </footer>

      </article>

      <aside>
        <p>Content aside here</p>
      </aside>

    </main>
  )
}

export default Main;