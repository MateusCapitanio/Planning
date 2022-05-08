import React from 'react';

import '../styles/card-project-style.css';

const Cardproject = ({ projectName, description, days, progress }) => {
    return (
        <main>
            <div className="card">
                <p className='title'>{projectName}</p>
                <p>{description}</p>
                <section className="section-progress">
                    <p className="date-finish">{`Prazo: ${days}`}</p>
                    <div className="progress-bar">
                        <div style={{width: progress}} className="progress-bar-line"></div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Cardproject;
