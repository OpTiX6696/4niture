import React from 'react';
import big_chair from '../images/chair-3961572_1920.png';
import small_chair1 from '../images/chair-4070161_1920.png';
import small_chair2 from '../images/daniil-silantev-1P6AnKDw6S8-unsplash.jpg';
import small_chair3 from '../images/suchit-poojari-ljRiZl00n18-unsplash.jpg';
import '../Styles/Facade.scss';

const Facade = () => {

  


  return (
    <div id='facade'>

      <div id='facade_text'>

        <h2 id='facade_text_bold'>Crafted With <span style={{display: 'block'}}>Excellence & Wood</span></h2>

        <div id='facade_text_normal'>
          <p>We design elegant pieces of furniture that</p>
          <p>Ooze Quality and Beauty</p>
          <p>And Last from now through your beautiful future.</p>
        </div>

        <a href='#'>Shop Now</a>

    
      </div>


      <div id='facade_img'>
        <div id='facade_img_big'>
          <img alt='A one-sitter chair with armrests' src={big_chair} />
        </div>

        <div id='facade_img_smalls'>
          <div className='facade_img_small'>
            <img alt='A small chair' src={small_chair1} />
          </div>
          <div className='facade_img_small'>
            <img alt='A small chair' src={small_chair2} />
          </div>
          <div className='facade_img_small'>
            <img alt='A small chair' src={small_chair3} />
          </div>

        </div>
      </div>

      
    </div>
  )
}

export default Facade