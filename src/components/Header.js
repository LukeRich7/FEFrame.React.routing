import React from 'react';

const Header = ({ title }) => (
    <div>
        <h1>{title}</h1>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/topics">Topics</a>
        
    </div>
)

export default Header;