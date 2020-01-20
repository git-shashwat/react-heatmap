import React from 'react';
import Header from './Header';
import HeatMap from './HeatMap';
import PointerSummary from './PointerSummary';
import TimeSlider from './TimeSlider';

const DashboardPage = () => (
    <div>
        <Header />
        <div className="dashboard-content">
            <HeatMap />
            <div>
                <PointerSummary />
                <TimeSlider />
            </div>
        </div>
    </div>
);

export default DashboardPage;