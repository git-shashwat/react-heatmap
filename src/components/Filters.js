import React from 'react';
import { connect } from 'react-redux';
import getHeaders from '../fixtures/getHeaders';
import { setPestle, setSector, setCountry, setTopic, setRegion } from '../actions/filters';
import { clearPotentialPointers } from '../actions/pointers';

const Filters = (props) => {

    const filters = ['pestle', 'sector', 'country', 'topic', 'region'].filter(value => value !== props.xLabel && value !== props.yLabel);

    return (
        <div className="filters-component">
            <h3 className="filters-component__title">Filters</h3>
            {filters.map(filter => {
                const filterCollection = getHeaders(props.database,filter);
                let setFilter = '';

                if (filter === 'pestle') {
                    setFilter = props.setPestle;
                } else if (filter === 'sector') {
                    setFilter = props.setSector;
                } else if (filter === 'country') {
                    setFilter = props.setCountry;
                } else if (filter === 'topic') {
                    setFilter = props.setTopic;
                } else {
                    setFilter = props.setRegion;
                }

                return (
                    <div>
                        <h4 className="filters-component__label"><label htmlFor={filter}>{filter}</label></h4>
                        <select
                            value={props[filter]}
                            onChange={(e) => {
                                setFilter(e.target.value)
                                props.clearPotentialPointers()
                            }}
                            id={filter}
                            className="filters-component__select-tag"
                        >
                            <option value="all">All</option>
                            {filterCollection.map(value => <option key={value} value={value}>{value}</option>)}
                        </select>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    database: state.pointers.database,
    pestle: state.filters.pestle,
    sector: state.filters.sector,
    country: state.filters.country,
    topic: state.filters.topic,
    region: state.filters.region,
    xLabel: state.filters.xLabel,
    yLabel: state.filters.yLabel
});

const mapDispatchToProps = (dispatch) => ({
    setPestle: (pestle) => dispatch(setPestle(pestle)),
    setSector: (sector) => dispatch(setSector(sector)),
    setCountry: (country) => dispatch(setCountry(country)),
    setTopic: (topic) => dispatch(setTopic(topic)),
    setRegion: (region) => dispatch(setRegion(region)),
    clearPotentialPointers: () => dispatch(clearPotentialPointers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);