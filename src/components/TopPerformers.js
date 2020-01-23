import React from 'react';
import { connect } from 'react-redux';
import { Card, CardColumns } from 'react-bootstrap';
var pluralize = require('pluralize')

const TopPerformers = (props) => {
    let potentialPointers = props.potentialPointers;
    potentialPointers.sort((a, b) => b.measure - a.measure);
    const topPerformersCount = potentialPointers.length < 10 ? potentialPointers.length : 10;
    let topPerformers = new Set(potentialPointers);
    topPerformers = Array.from(topPerformers);
    topPerformers = topPerformers.slice(0, topPerformersCount);

    // Color Schemes for Cards
    const cardBorderSchemes = ["primary", "danger", "warning", "success", "info"];
    const cardTitleSchemes = ["#AA3939", "#AA6C39", "#226666", "#2D882D"]

    return (
        <div className="top-performers">
            <h1 className="top-performers__title">Top {topPerformersCount} {pluralize(props.xLabel, topPerformersCount)}</h1>
            <CardColumns style={{marginTop: 4+'rem'}} className="top-performers__card-columns">
                {topPerformers.map(({ id, columnLabel, measure, relevance, likelihood, end_year, url }) => (
                    <a href={url} target="_blank">
                        <Card className="top-performers__card" border={cardBorderSchemes[Math.floor(Math.random() * Math.floor(4))]}>
                        <Card.Body>
                            <Card.Title><h1 style={{color: cardTitleSchemes[Math.floor(Math.random() * Math.floor(4))]}}>{columnLabel}</h1></Card.Title>
                            <Card.Text>
                            {measure} | {relevance} | {likelihood} | {end_year}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                ))}
            </CardColumns>
        </div>
    );
};

const mapStateToProps = (state) => ({
    potentialPointers: state.pointers.potentialPointers,
    xLabel: state.filters.xLabel
});

export default connect(mapStateToProps)(TopPerformers);