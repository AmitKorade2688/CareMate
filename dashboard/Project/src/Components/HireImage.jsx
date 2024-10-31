import './HireImage.css'

const HireImage = () => {
    return (
        <div className="image-container">
            <div className="overlay">
                <h1 className="headline">Caring for Your Loved Ones</h1>
                <p className="description">We provide personalized caregiving services tailored to the needs of your elderly family members.</p>
                <p className="description">Ensuring comfort, safety, and well-being, all at your fingertips.</p>
            </div>
            <img src="/Images/caretaker.avif" alt="Caretaker" className="image-fit" />
        </div>
    );
}

export default HireImage;
