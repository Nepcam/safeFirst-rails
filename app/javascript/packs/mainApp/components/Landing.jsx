import React from 'react';
import Slider from "react-slick";
import fellingByPowerlines from '../assets/images/fellingByPowerlines.jpg';
import Forestry from '../assets/images/Forestry.jpg';
import planting from '../assets/images/planting.jpg';
import pruner from '../assets/images/pruner.jpg';
import treeFellpowerLines from '../assets/images/treeFellpowerLines.jpg';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        fellingByPowerlines,
        Forestry,
        planting,
        pruner,
        treeFellpowerLines,
      ],

    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      adaptiveHeight: true,
    };

    return (
      <div>
        <div className="container">
          <h1 className="title is-1">safeFirst</h1>
        </div>
        <Slider { ...settings }>
          {
            this.state.images.map(image => {
              return (
                <div className="slide"><img key={ image } src={ image }/></div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}
