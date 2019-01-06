import React from 'react'
import './FirstSlide.css'

const FirstSlide = (props) => {
	const {books, labManuals} = props;

	return (
    <div className="carousel-item first-slide-item active">
      <div className="logo-box">
        <img className="d-block img-fluid" src={"./assets/images/logo-big.png"} alt="Paras Prakashan" />
      </div>

      <div className="hero-slide first-slide row">
        <div className="hero-image col-lg-6">
          <div className="text-center">
            <h2 className="display-4">Books</h2>
          </div>
        </div>
        <div className="text-center col-lg-6 hero-text-section">
          
        </div>
      </div>
    </div>
	)
}

export default FirstSlide