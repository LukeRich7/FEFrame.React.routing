alert("it's alive");

import React from 'react';
import { render } from 'react-dom';
import { Home, About, Topics } from './screens';
 
const Index = ({ pathname }) => {
    switch(pathname) {
        case '/':
            return <Home/>;
        case '/about':
            return <About/>;
        case '/topics':
            return <Topics/>;
        default:
            return <Home/>
    }
}

let pathname = window.location.pathname;

render(
    <Index pathname={pathname}/>,
    document.getElementById('root')
)

window.addEventListener('pop state',() => {
    pathname = window.location.pathname;
})