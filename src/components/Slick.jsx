import React from 'react';
import './Slick.css';
import Slider from "react-slick";


class Slick extends React.Component {
    render() {
        let settings = {
            slidesToShow: 8,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            accessibility: true
        };
        
        return(
            <div className="ourBooks">
                <div className="caption">
                    <label htmlFor="slider"> Китобхои мо </label>
                </div>
                <div id="slider" className="container">
                    <Slider {...settings}>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                        <div>
                            <img src="encyclopedia.png" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Slick;