import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './backForwardLinks.css'

function BackForwardLinks(props) {

    const { title } = useParams();

    const [currentIndex, setCurrentIndex] = useState();

    useEffect(() => {
        const getCurrentIndex = function() {
            for (let i = 0; i < props.articles.length; i++) {
                if (props.articles[i].title === title) {
                    return i;
                }
            }
            // Somehow this article's title is not in our list of articles.
            return -1;
        }
        let index = getCurrentIndex();
        if (index >= 0) setCurrentIndex(index);
    }, [props.articles, title]);


    const renderLatestLink = function() {

        const text = '<<'

        if (!props.articles || props.articles.length < 1 || currentIndex === 0) {
            return(
                <span className='disabled-text'>{text}</span>
            );
        }

        return(
            <NavLink to={'/articles/title/' + getLatestTitle()}>{text}</NavLink>
        );
    }

    const getLatestTitle = function() {
        if (!props.articles[0].title) {
            return "";
        }
        return props.articles[0].title;
    }
    
    const renderLaterLink = function() {

        const text = '<'

        if (!props.articles || props.articles.length < 1 || currentIndex === 0) {
            return(
                <span className='disabled-text'>{text}</span>
            );
        }

        return(
            <NavLink to={'/articles/title/' + getLaterTitle()}>{text}</NavLink>
        );
    }

    const getLaterTitle = function() {
        if (currentIndex >= 0) {
            let index = currentIndex - 1;
            if (index < 0) index = 0;
            return props.articles[index].title;
        }
        return "";
    }

    const renderEarlierLink = function() {

        const text = '>'

        if (!props.articles || props.articles.length < 1 || currentIndex === props.articles.length - 1) {
            return(
                <span className='disabled-text'>{text}</span>
            );
        }

        return(
            <NavLink to={'/articles/title/' + getEarlierTitle()}>{text}</NavLink>
        );
    }

    const getEarlierTitle = function() {
        if (currentIndex >= 0) {
            let index = currentIndex + 1;
            if (index >= props.articles.length) index = props.articles.length - 1;
            return props.articles[index].title;
        }
        return "";
    }

    const renderEarliestLink = function() {

        const text = '>>'

        if (!props.articles || props.articles.length < 1 || currentIndex === props.articles.length - 1) {
            return(
                <span className='disabled-text'>{text}</span>
            );
        }

        return(
            <NavLink to={'/articles/title/' + getEarliestTitle()}>{text}</NavLink>
        );
    }

    const getEarliestTitle = function() {
        if (!props || !props.articles || !props.articles[props.articles.length - 1].title) {
            return "";
        }
        return props.articles[props.articles.length - 1].title;
    }

    const renderBackLinks = function() {

        if (!props.articles || props.articles.length < 1 || currentIndex === 0) {
            return(
                <span className='disabled-text'>Beginning</span>
            );
        }

        return(
            <div>
                {renderLatestLink()}
                {renderLaterLink()}
            </div>
        );
    }

    const renderForwardLinks = function() {

        if (!props.articles || props.articles.length < 1 || currentIndex === props.articles.length - 1) {
            return(
                <span className='disabled-text'>End</span>
            );
        }

        return(
            <div>
                {renderEarlierLink()}
                {renderEarliestLink()}
            </div>
        );
    }

    return(
        <div className='back-forward-links'>
            {renderBackLinks()}
            {renderForwardLinks()}            
        </div>
    );
}

export default BackForwardLinks;