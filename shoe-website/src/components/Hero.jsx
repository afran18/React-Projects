const HeroSection = () => {
    return(
        <div>
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Your feet deserve the best and we're here to help you with our shoes.
                Your feet deserve the best and we're here to help you with our shoes.
                </p>
            <div className="hero-btn">
                <button className="button shop-now">Shop Now</button>
                <button className="sec-button category">Category</button>
            </div>

            <div className="shopping">
                <p>Also available on</p>

                <div className="brand-icons">
                    <img src="/images/flipkart-logo.png" alt="flipkart logo" />
                    <img src="/images/amazon-logo.png" alt="amazon logo" />
                </div>
            </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe.png" alt="Shoe" />
            </div>
        </main>
        
        </div>
    )
}

export default HeroSection;