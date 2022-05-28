import slide1 from '../img/jcr_17c5e827-c9e7-4d68-9111-09191dfb2488.png';
import slide2 from '../img/skidka-na-aksessuar-pri-pokupke-tehniki_wide_L_3032x544.png';
import slide3 from '../img/jcr_2428f9d5-dc4f-4b38-8a7e-647aaafafc63.png';
import slide4 from '../img/Wide 2800x544.png';
import '../css/slider.css';

import React, {Component} from 'react';
import Corousel from 'react-bootstrap/Carousel'

function Slider() {
    return (
      <div className="container-fluid">
        <Corousel>
         <Corousel.Item>
             <img
             className='d-block w-100'
             src={slide1}
             />
         </Corousel.Item>
         <Corousel.Item>
             <img
             className='d-block w-100'
             src={slide2}
             />
         </Corousel.Item>
         <Corousel.Item>
             <img
             className='d-block w-100'
             src={slide3}
             />
         </Corousel.Item>
         <Corousel.Item>
             <img
             className='d-block w-100'
             src={slide4}
             />
         </Corousel.Item>
        </Corousel>
      </div>
    );
  }
export default Slider;