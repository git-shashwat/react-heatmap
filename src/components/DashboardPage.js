import React from 'react';
import Header from './Header';
import HeatMap from './HeatMap';
import PointerSummary from './PointerSummary';
import TimeSlider from './TimeSlider';
import Coordinates from './Coordinates';
import Filters from './Filters';
import Measures from './Measures';

const DashboardPage = () => (
    <div>
        <Header />
        <div className="dashboard-content">
            <HeatMap />
            <div>
                <PointerSummary />
                <TimeSlider />
                <Coordinates />
                <div style={{ display: "flex" }}>
                    <Filters />
                    <Measures />
                </div>
            </div>
        </div>
    </div>
);

export default DashboardPage;