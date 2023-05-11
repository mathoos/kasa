import '../style/Slider.scss'
import arrow from "../assets/arrow.svg"
import { useState } from "react";
import PropTypes from 'prop-types';

function modulo(n, m) {
  return ((n % m) + m) % m;
}

function Slider({slides}) {
  const [count, setCount] = useState(0);
  const showArrows = slides.length > 1;

  return (
    <div className="slider">
      {showArrows && (
        <img 
          onClick={() => setCount(modulo(count - 1, slides.length))}
          className="slider-arrow slider-arrow_left" 
          src={arrow} 
          alt="" 
        />
      )}
      <img 
        className="slider-image" 
        src={slides[count]} 
        alt="" 
      />
      {showArrows && (
        <img 
          onClick={() => setCount(modulo(count + 1, slides.length))} 
          className="slider-arrow slider-arrow_right" 
          src={arrow} 
          alt="" 
        />
      )}
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider