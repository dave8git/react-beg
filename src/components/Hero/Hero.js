import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
    <header className={styles.component}>
        <img className={styles.image} src={props.imgSRC} alt="Girl in a jacket" />
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    </header>
)
    
Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
};

export default Hero;