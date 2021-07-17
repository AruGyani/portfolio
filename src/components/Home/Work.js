import React from 'react';

import '../../styles/Home/Work.css';

import desitrak from '../../images/desitrak.png';

function Work() {
    return (
        <div className="work container" id="work">
            <h1 className="display-4">Work</h1><hr/>

            <a href="/projects/desitrak"><div className="project">
                <img src={desitrak} alt="desi track"/>
            </div></a>
        </div>
    );
}

export default Work;