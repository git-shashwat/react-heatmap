import React from 'react';
import { connect } from 'react-redux';
import { setMeasure } from '../actions/filters';

const Measures = (props) => (
    <div className="filters-component measures-component">
        <h3 className="filters-component__title">Measures</h3>
        <select
            value={props.measure}
            onChange={(e) => props.setMeasure(e.target.value)}
        >
            <option value="intensity">Intensity</option>
            <option value="likelihood">Likelihood</option>
            <option value="relevance">Relevance</option>
        </select>
    </div>
);

const mapStateToProps = (state) => ({
    measure: state.filters.measure
});

const mapDispatchToProps = (dispatch) => ({
    setMeasure: (measure) => dispatch(setMeasure(measure))
});

export default connect(mapStateToProps, mapDispatchToProps)(Measures);