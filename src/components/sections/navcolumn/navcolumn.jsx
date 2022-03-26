import React from 'react';
import './navcolumn.css';
import { NavLink } from 'react-router-dom';

function NavColumn(props){

    const RECENT_NUM = 5;

    const renderRecents = function() {
        if (!props.articles || Array.isArray(props.articles) === false || props.articles.length < 1) {
            return(
                <div>
                    <h3>No articles found!</h3>
                </div>
            );
        }
        return (
            <div className='nav-column-list-div'>
                <h3>Recent Posts</h3>
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
            <NavLink to='/browse'>Browse All Time</NavLink>
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