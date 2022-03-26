import React from 'react';
import './navcolumn.css';
import { NavLink } from 'react-router-dom';

function NavColumn(props){

    const RECENT_NUM = 5;

    const renderRecents = function() {
        if (!props.articles || Array.isArray(props.articles) === false || props.articles.length < 1) {
            return (
                <div>
                    <h2>No articles found!</h2>
                </div>
            );
        }
        return (
            <div className='nav-column-list-div'>
                <h2>Recent Posts</h2>
                <ul>
                    {props.articles.slice(0, RECENT_NUM).map(
                        article =>
                        <li key={article.title}>
                            <NavLink className='nav-column-link' to={'/articles/title/' + article.title}>{article.title}</NavLink>
                        </li>
                    )}
                </ul>
            </div>
        );
    }

    const renderSearchLink = function() {
        return(
            <h3><NavLink to='/browse'>Browse All Time</NavLink></h3>
        );
    }
    
    return(
        <div className='nav-column'>
            {renderRecents()}
            {renderSearchLink()}
        </div>
    );
}
 
export default NavColumn;