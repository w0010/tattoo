import { useState } from 'react';
import './Carousel.css';

const Carousel = ({ articles }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to calculate the offset for the slide transition
    const getSlideStyle = (index) => {
        const offset = (index - currentSlide) * 100;
        return {
            transform: `translateX(${offset}%)`,
            transition: 'transform 0.5s ease'
        };
    };

    // Adjust nextSlide and prevSlide to handle wrapping around the array
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % articles.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);

    const carouselInnerStyle = {
        width: `calc(100% * ${articles.length})`, // Dynamically set the width based on the articles length
        transform: `translateX(-${currentSlide * 100}%)`, // Moves the slides
    };

    // Your articles array should go inside of the cooresponding component where carousel will go

    return (
        <div className="carousel">

            <div className="carousel-inner" style={{ carouselInnerStyle }}>
                {articles.map((article, index) => (
                    <article key={index} className="slide" style={getSlideStyle(index)}>
                        <div className="article-content">
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    </article>
                ))}
            </div>
            
            <button onClick={prevSlide} className="prev">&lt;</button>
            <button onClick={nextSlide} className="next">&gt;</button>
        </div>
    )

}

export default Carousel;