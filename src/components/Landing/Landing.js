import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import hashnodeLogo from '../logo/hashnode.png';
import x_logo from '../logo/x.png'

import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src={x_logo}
                                    alt='X'
                                    className='landing--social'
                                    style={{
                                        width: '35px', 
                                        height: '35px',
                                        fill : theme.secondary
                                    }}
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                        {socialsData.hashnode && (
                            <a
                                href={socialsData.hashnode}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEeUlEQVR4nO2dT28WVRTGh4UutLpQ/AqoW1CCUSLyiaQWXEEN2LCgG5d+A6XoRzDGraDA1rb8Saed5zkj6YIaBdJrTjokBWtg5p059++T3E3Td95zfs+duTNzz71vVRUVFRUVFRUVFQUq59whEfkQwDmSP5C8DeABgEdd+5PkLZLXAJwVkQ/0M77jjl6bm5vvkFwkuU7S9WxrJC/UdX3Ydx7RaWtr63WSl0n+NQD8820HwJIe03deUYjkpwDujwD+mQbgHsmTvvMLWgAWADwZG/4+Ex6TnPedZ3Byzh0CsDwV+APalTJIPwv/G0P4T8+Gb7M3wXmCX0zw2PNZTAgHPnO8HIUGnzmZECp85mBC6PCZsgmxwGeKJsQGnymZECt8pmBC7PAZswmpwGeMJqQGnzGZkCp8xmBC6vAZsgm5wGeIJuQGnyGZkCt8hmBC7vDp04QCn/5MKPDp70wo8On3cmRcOuKeS24XwHWS50XklIi8q9Vu2kTkPf2bliICuOF5TFieCv6CR/DfkzzysrGqOSRX9LOejJifolxwsoo1/n9bbdv2+NC4m6Y5MbCwd9ZO82S0MkgAc1PUar5EEj9tbGy8PWv8Wh0N4GcP8d8bpSC4q1I2h++ce6UaSc65Vz2ZsDRGff4YJeJ92rp+bzWy9Gwi+YdxLjsz5dItjrDsMbuzXPNfpKZpPvIwMC8OClbvZ60HMADfVRNLlzEZG7A26NlA12RZ9372uNUcKn1mMDbAicix3oEC+NLYgF8nIX5wbr8Z57bQO8huNaJlTzk/Ce0AxjZ9KBwS5G3LIEXkVGUkETltbMDN3kF2a28tgzxSGal7VWGZW9s7SF0AbRkkgLlJaB+c25xxbv8Eb4CIvFEZqW3bN43PgL97B1kuQRzTAIlhEP6sMlIUg7CHJ8YLlZEAfGWc29UhQZ6zDBLAjcpI2iMtcxORL3oHqVu+GBuwq7eH1cRq2/Z9496v7eigYD28vl0Znfh/c/rROKfVwRP1el22PguapjlRTSQAH3t4HT18bNve3n6L5EPjgO9MOCGzapzLzswbRgH42jhop9OHOo048pTkLx7yuDhz8Dqx3G12ZG5CPcJ2Y3o2+YCvZ3Jd169VY0hLLLrNjqyTWNdpxFmu+QrCQ+d5rN89Cvx9Jsx7MMB1g+Y1ncnqeatpPZ+xv31epVaayD0zdCZrUV8lqCFdzdJcV5p4unvC/T3J0kRVKc7li+CXCmn66/lljQBzgF8uR/QPv5hA//BzNwEhwM/VBIQEPzcTECL8XExAyPBTNwExwE/VBMQEPzUTECP8VExAzPBjNwEpwI/VBKQEPzYTkCL8WExAyvBDNwE5wA/VBOQEPzQTkCP8UExAzvCfypWfsfIvt7ctwhXDnr+cfc8/SCTPTFmB1x37jHkPi0kAPiF5dwID7uqxfecXhbb2CoKXtLx7BPAPAVwarVA2J9V1fbhbJLI2AHz5QecxJSLHdLGbLmPSRXa6jllXoGvTrQC6hXcr+j+DtocpKioqKioqKiqq7PQv3Eo/r99dLHoAAAAASUVORK5CYII='
                                    alt='Hashnode'
                                    className='landing--social'
                                    style={{
                                        width: '1.5rem', 
                                        height: '1.5rem',
                                        fill : theme.secondary
                                    }}
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Button className={classes.resumeBtn}>
                                        Download CV
                                    </Button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.contactBtn}>
                                    Contact
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
