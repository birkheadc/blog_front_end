import React from 'react';
import { NavLink } from 'react-router-dom';
import './browse.css';

function Browse(props) {
    if (!props.articles || Array.isArray(props.articles) === false || props.articles.length < 1) {
        return (
            <div className='browse-article'>
                <h2>Could Not Connect To Server!</h2>
            </div>
        );
    }
    return (
        <div className='browse-article'>
            <h2>Browse All Posts</h2>
            <ul className='browse-article-list'>
                {props.articles.map(
                    article =>
                    <li key={article.title}>
                        <NavLink className='browse-article-list-item' to={"/articles/title/" + article.title}>
                            <div>
                                <h3>{article.title}</h3><h4>{new Date(article.postDateUnixTimeSeconds * 1000).toDateString()}</h4>
                            </div>
                            <div>
                                <p>{article.subTitle}</p>
                            </div>
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Browse;