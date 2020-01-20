import React from 'react';
import mapValues from '../selectors/mapValues';
import { connect } from 'react-redux';

const HeatMapValue = (props) => (
    <th>
        {props.pointers[0].intensity}
    </th>
);

const mapStateToProps = (state) => {
    return {
        pointers: mapValues(state.map)
    }
}

export default connect(mapStateToProps)(HeatMapValue);