import React from 'react';
import Slider from "react-slick";
import connect from "react-redux/es/connect/connect";
import fellingByPowerlines from '../assets/images/fellingByPowerlines.jpg';
import Forestry from '../assets/images/Forestry.jpg';
import planting from '../assets/images/planting.jpg';
import pruner from '../assets/images/pruner.jpg';
import treeFellpowerLines from '../assets/images/treeFellpowerLines.jpg';
import { unsetCoverPage } from "../actions/login";

class Landing extends React.Component {
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

  componentDidMount() {
    this.props.dispatch(unsetCoverPage());
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
      <div className="landing-container">
        <Slider { ...settings }>
          {
            this.state.images.map((image, index) => {
              return (
                <div className="slide" key={ index }><img src={ image }/></div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}

export default connect(null)(Landing);
