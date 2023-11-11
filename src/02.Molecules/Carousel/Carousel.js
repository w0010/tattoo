// Carousel.js
import { useState } from 'react';
import './Carousel.css';

const Carousel = ({ articles }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const getSlideStyle = () => ({
        width: `${100 / articles.length}%`,
    });

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % articles.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);

    const carouselInnerStyle = {
        display: 'flex', // ensure slides are inline
        width: `calc(100% * ${articles.length})`, // width of all slides in row
        transform: `translateX(-${currentSlide * (100 / articles.length)}%)`, // Moves the slides
        transition: 'transform 0.5s ease', // ensures the transition is smooth
    };

    // Your articles array should go inside of the cooresponding component where carousel will go

    return (
        <div className="carousel">
            <div className="carousel-inner" style={carouselInnerStyle}>
                {articles.map((article, index) => (
                    <article key={index} className="slide" style={getSlideStyle()}>
                        <div className="article-content">
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    </article>
                ))}
            </div>

            <button onClick={prevSlide} className="prev">&lt; prev</button>
            <button onClick={nextSlide} className="next">next &gt;</button>
        </div>
    )

}

export default Carousel;