import React from 'react';

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <h2 as='h1'>Rover Mars</h2>
            <video autoPlay loop muted>
                <source src="/mars.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default App;
