import React from 'react';
import big_chair from '../images/chair-3961572_1920.png';
import small_chair1 from '../images/chair-4070161_1920.png';
import small_chair2 from '../images/daniil-silantev-1P6AnKDw6S8-unsplash.jpg';
import small_chair3 from '../images/suchit-poojari-ljRiZl00n18-unsplash.jpg';
import '../Styles/Facade.scss';

import lamp1 from '../images/Hanging-Light-PNG-Clipart.png';
import lamp2 from '../images/purepng.com-hanging-lampobjectslamplightdecorationluxuryobjecthomehouse-631521883974bfst4.png';
import lamp3 from '../images/lamp3.png';
import lamp4 from '../images/chandelier-5171320_1280.png';
import lamp5 from '../images/crystal-chandelier-5529080_1920.png';

const Facade = () => {

  


  return (
    <div id='facade'>


      <div className='lamp'>
        <img className='lamp1' src={lamp1} />
        <img className='lamp2' src={lamp2} />
        <img className='lamp3' src={lamp3} />
      </div>


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