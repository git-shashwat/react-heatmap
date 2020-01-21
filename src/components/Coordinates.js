import React from 'react';
import { connect } from 'react-redux';
import { setXLabel, setYLabel } from '../actions/filters';
import { clearPotentialPointers } from '../actions/pointers';

const Coordinates = (props) => (
    <div className="coordinate-component">
        <h1 className="coordinate-component__title">Coordinates</h1>
         <div className="coodinate-component__filter">
            <h2><label htmlFor="xLabel">Horizontal Axis</label></h2>
            <select
            className="coordinate-component__select-tag"
            value={props.xLabel}
            id="xLabel"
            onChange={(e) => {
                props.setXLabel(e.target.value);
                props.clearPotentialPointers();
            }}
            >
                <option value="topic">Topic</option>
                <option value="region">Region</option>
                <option value="pestle">Pestle</option>
                <option value="sector">Sector</option>
                <option value="country">Country</option>
            </select>
         </div>
         <div className="coodinate-component__filter">
            <h2><label htmlFor="xLabel">Vertical Axis</label></h2>
            <select
            className="coordinate-component__select-tag"
            value={props.yLabel}
            id="yLabel"
            onChange={(e) => {
                props.setYLabel(e.target.value)
                props.clearPotentialPointers();
            }}
            >
                <option value="topic">Topic</option>
                <option value="region">Region</option>
                <option value="pestle">Pestle</option>
                <option value="sector">Sector</option>
                <option value="country">Country</option>
            </select>
         </div>
    </div>
);

const mapStateToProps = (state) => ({
    xLabel: state.filters.xLabel,
    yLabel: state.filters.yLabel
});

const mapDispatchToProps = (dispatch) => ({
    setXLabel: (xLabel) => dispatch(setXLabel(xLabel)),
    setYLabel: (yLabel) => dispatch(setYLabel(yLabel)),
    clearPotentialPointers: () => dispatch(clearPotentialPointers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Coordinates);