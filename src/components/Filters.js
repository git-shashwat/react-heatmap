import React from 'react';
import { connect } from 'react-redux';
import getHeaders from '../fixtures/getHeaders';
import { setPestle, setSector, setCountry } from '../actions/filters';

const Filters = (props) => {

    const pestles = getHeaders('pestle');
    const sectors = getHeaders('sector');
    const countries = getHeaders('country');

    return (
        <div className="filters-component">
            <h3 className="filters-component__title">Filters</h3>
            <div>
                <h4><label htmlFor="pestle">Pestle</label></h4>
                <select
                    value={props.pestle}
                    onChange={(e) => props.setPestle(e.target.value)} 
                    id="pestle"
                    className="filters-component__select-tag"
                >
                    <option value="all">All</option>
                    {pestles.map((pestle) => <option value={pestle}>{pestle}</option>)}
                </select>
            </div>
    
            <div>
                <h4><label htmlFor="sector">Sector</label></h4>
                <select
                    value={props.sector}
                    onChange={(e) => props.setSector(e.target.value)} 
                    id="sector"
                    className="filters-component__select-tag"
                >
                    <option value="all">All</option>
                    {sectors.map((sector) => <option value={sector}>{sector}</option>)}
                </select>
            </div>
    
            <div>
                <h4><label htmlFor="country">Country</label></h4>
                <select
                    value={props.country}
                    onChange={(e) => props.setCountry(e.target.value)} 
                    id="country"
                    className="filters-component__select-tag"
                >
                    <option value="all">All</option>
                    {countries.map((country) => <option value={country}>{country}</option>)}
                </select>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    pestle: state.filters.pestle,
    sector: state.filters.sector,
    country: state.filters.country
});

const mapDispatchToProps = (dispatch) => ({
    setPestle: (pestle) => dispatch(setPestle(pestle)),
    setSector: (sector) => dispatch(setSector(sector)),
    setCountry: (country) => dispatch(setCountry(country))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);