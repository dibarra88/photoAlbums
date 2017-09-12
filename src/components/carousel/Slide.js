import React from 'react';
const Slide = (props) => {
    // const current = props.background[props.current];
  const current = props.background;
    const styles = {
      imageBackground: {
        backgroundImage: `url(${current})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }
    }
    return <div className="slide" style={styles.imageBackground}></div>
  }
  
  export default Slide;