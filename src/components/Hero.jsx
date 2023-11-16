import heroImg from '../assets/programming.svg'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>React Projects</h1>
                    <p>React, or React.js, is an open-source JavaScript library developed and maintained by Facebook. It is widely used for building user interfaces, especially for single-page applications where the user interacts with the web page without the need for a full page reload. React is often referred to as a declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="hero img" className='img' />
                </div>
            </div>
        </section>
    )
}
export default Hero