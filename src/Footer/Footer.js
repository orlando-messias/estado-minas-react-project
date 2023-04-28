import Twitter from '../assets/social-twitter.png';
import Whatsapp from '../assets/social-whatsapp.png';
import Facebook from '../assets/social-facebook.png';

import './styles.css';

function Footer() {
  return (
    <footer className='footer-general'>
      <div className='footer-container'>
        <div className='newsletter-box'>
          <div className='newsletter-box-info'>
            <p className='title'>RECEBA NOSSA NEWSLETTER</p>
            <p className='subtitle'>Comece o dia com as notícias selecionadas pelo nosso editor</p>
          </div>
          <div className='newsletter-form'>
            <input type='text' placeholder='DIGITE SEU E-MAIL' />
            <div class='newsletter-button btn'>RECEBER</div>
          </div>
        </div>

        <div className='share'>
          <div className='social-media'>
            <span>compartilhe</span>
            <img className='btn' src={Twitter} alt="Twitter" />
            <img className='btn' src={Whatsapp} alt="Whatsapp" />
            <img className='btn' src={Facebook} alt="Facebook" />
          </div>
          <div className='comments'>
            <div className='comments-button btn'>
              LEIA 100 COMENTÁRIOS
            </div>
            <p>* PARA COMENTAR, FAÇA SEU <span><a href='#'>LOGIN</a></span> OU <span><a href='#'>ASSINE</a></span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;