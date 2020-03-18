import React from 'react';
import { Button } from 'react-bootstrap';

export default () => (
    <header className="header">
        <div className="header__content">
            <h1 className="header__title">Heatmap</h1>
            <div className="header__btn-group">
                <Button variant="primary" id="amazing"><h2>Heatview <i className="fa fa-fire" id="lit"></i></h2></Button>
                <Button variant="light"><h2>Cross Impact</h2></Button>
                <Button variant="light"><h2>Quick Guide</h2></Button>
                <Button variant="light"><h2>Feedback</h2></Button>
            </div>
        </div>
    </header>
);