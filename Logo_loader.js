import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
    const [isMounted, setIsMounted] = useState(false);

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader
            .add({
                targets: '#logo path',
                delay: 300,
                duration: 1500,
                easing: 'easeInOutQuart',
                strokeDashoffset: [anime.setDashoffset, 0],
            })
            .add({
                targets: '#logo #B',
                duration: 700,
                easing: 'easeInOutQuart',
                opacity: 1,
            })
            .add({
                targets: '#logo',
                delay: 500,
                duration: 300,
                easing: 'easeInOutQuart',
                opacity: 0,
                scale: 0.1,
            })
            .add({
                targets: '.loader',
                duration: 200,
                easing: 'easeInOutQuart',
                opacity: 0,
                zIndex: -1,
            });
    };

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledLoader className="loader" isMounted={isMounted}>
            <Helmet bodyAttributes={{ class: `hidden` }} />

            <div className="logo-wrapper">
                <IconLoader />
            </div>
        </StyledLoader>
    );
};

Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
};

export default Loader;


// HTML

<div id="___gatsby">
    <div style="outline:none" tabIndex="-1" id="gatsby-focus-wrapper">
        <div id="root"><a className="skip-to-content" href="#content">Skip to Content</a>
            <div className="layout__StyledContent">
                <header className="nav__StyledHeader">
                    <nav className="nav__StyledNav">
                        <div className="logo fade-enter-done" tabIndex="-1"><a href="/" aria-label="home">
                            <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>
                                Logo</title>
                                <g transform="translate(-8.000000, -2.000000)">
                                    <g transform="translate(11.000000, 5.000000)">
                                        <path
                                            d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                                            fill="currentColor"></path>
                                        <polygon id="Shape" stroke="currentColor" stroke-width="5"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon>
                                    </g>
                                </g>
                            </svg>
                        </a></div>
                    </nav>
                </header>
            </div>
        </div>
    </div>
</div>