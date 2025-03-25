function AboutSection() {
    // Inline style in camelCase
    const buttonStyle = {
      backgroundColor: '#f6ad55', // background-color -> backgroundColor
      padding: '10px 20px', // padding -> padding
      borderRadius: '5px', // border-radius -> borderRadius
      color: 'white', // color -> color
      textDecoration: 'none', // text-decoration -> textDecoration
    };
  
    return (
      <section id="about">
        <h2>About This Project</h2>
        <p>
          This project allows you to interact with the stars, drag them around, and create constellations.
          You can name your constellations and explore their legends in the "Constellation Legends" section.
        </p>
        {/* Button with inline styles */}
        <a href="#about" style={buttonStyle}>Learn More</a>
      </section>
    );
  }
export default AboutSection;