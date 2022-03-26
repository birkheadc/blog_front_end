import React, { useEffect, useState } from 'react';
import './navbar.css';
import fetchBlogTitle from '../../../api/fetchBlogTitle/fetchBlogTitle';
import fetchBlogSubtitle from '../../../api/fetchBlogSubtitle/fetchBlogSubtitle';

function Navbar(props) {

    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();

    useEffect(async () => {

        if (title === undefined) {
            let t = await fetchBlogTitle(props.apiUrl);
            setTitle(t);
        }
    }, [title, props.apiUrl])

    useEffect(async () => {

        if (subtitle === undefined) {
            let t = await fetchBlogSubtitle(props.apiUrl);
            setSubtitle(t);
        }
    }, [subtitle, props.apiUrl])

    return (
        <nav>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </nav>
    );
}

export default Navbar;