import React from 'react'
import PropTypes from 'prop-types'
import "./cards.css"
function card({title, imageSource, url, text}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
            <img src={imageSource} alt="" className="card-img-top"></img>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text: 'pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere'
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

card.propTypes ={
    title : PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text :PropTypes.string
}

export default card
