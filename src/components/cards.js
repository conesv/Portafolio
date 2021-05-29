import React from 'react'
import Card from "./card"
import image1 from '../assets/landinf.JPG'
import image2 from '../assets/login.JPG'
import image3 from '../assets/image3.jpg'


//git status
//git add .
//git commit name
//git push
const Cards = [
    {
        id: 1,
        title: 'Landing page',
        image: image1,
        url: 'https://neuralinkti2.web.app/lp.html',
        text: 'This is a landing page developed with HTML, CSS and Bootstrap, it is about neuralink but is not directly conceted with this bussines'
    },
    {
        id: 2,
        title: 'Login',
        image: image2,
        url: 'https://conesv.github.io/login/',
        text: 'This is a login developed whit HTML and CSS and Bootstrap, i developed this page because i needed an example login for another C# proyect'
    },
    {
        id: 3,
        title: 'Web 3',
        image: image3,
        url: 'https://www.google.com'
    }
]

function cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    Cards.map(card=> (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default cards
