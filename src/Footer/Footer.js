import Twitter from '../assets/social-twitter.png';
import Whatsapp from '../assets/social-whatsapp.png';
import Facebook from '../assets/social-facebook.png';

import './styles.css';

function Footer() {
  return (
    <footer>
      <div className='newsletter-box'>
        <div className='newslotter-box-info'>
          <p className='title'>RECEBA NOSSA NEWSLETTER</p>
          <p className='subtitle'>Comece o dia com as notícias selecionadas pelo nosso editor</p>
        </div>
        <div className='newsletter-form'>
          <input type='text' placeholder='DIGITE SEU E-MAIL' />
          <div class='newsletter-button'>RECEBER</div>
        </div>
      </div>

      <div className='share'>
        <div className='social-media'>
          <span>compartilhe</span>
          <img src={Twitter} alt="Twitter" />
          <img src={Whatsapp} alt="Whatsapp" />
          <img src={Facebook} alt="Facebook" />
        </div>
        <div className='comments'>
          <div className='comments-button'>
            LEIA 100 COMENTÁRIOS
          </div>
          <p>* PARA COMENTAR, FAÇA SEU <span><a href='#'>LOGIN</a></span> OU <span><a href='#'>ASSINE</a></span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;