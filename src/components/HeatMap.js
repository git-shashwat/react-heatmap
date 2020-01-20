import React from 'react';
import getHeaders from '../fixtures/getHeaders';
import getIntensity from '../fixtures/getIntensity';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setPotentialPointer, setActivePointer } from '../actions/pointers';

const Heatmap = (props) => {
    const pointersCollection = getIntensity(props.xLabel,props.yLabel, props.startYear, props.endYear, props.pestle, props.sector, props.country);
    const Xheaders = pointersCollection.xheaders;
    const intensityCollection = pointersCollection.pointersCollection;
    return (
        <div className="table-container">
            <Table size="sm" responsive borderless className="table">
                <tbody>
                    <tr>
                        <th></th>
                        {Xheaders.map(header => <th className="table__header" key={header}>{header}</th>)}
                    </tr>
                    {intensityCollection.map(collection => (
                        <tr>
                            <td className="table__sector">{collection.rowLabel}</td>
                            {collection.rowCollection.map(({ id, intensity, color, columnLabel, relevance, likelihood, url, title }) => {
                                if (intensity !== "") {
                                    const pointer = {
                                        id,
                                        intensity,
                                        columnLabel,
                                        relevance,
                                        likelihood,
                                        url,
                                        title
                                    }
                                    /*
                                        Isko aage dekhenge speed badhane ke liye
                                        props.setPotentialPointer(pointer);
                                    */
                                    return (
                                        <td
                                            className="table__cell"
                                            onClick={() => props.setActivePointer(pointer)}
                                            title={`${intensity}| ${columnLabel}| ${collection.rowLabel}`}
                                            key={id}
                                            >
                                            <p style={{ backgroundColor: color, padding: 0.6+'em', width: 0.6+'em', margin: "auto" }}></p>
                                       </td>
                                     )
                                } else {
                                    return (
                                        <td></td>
                                    );
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
        </Table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    xLabel: state.filters.xLabel,
    yLabel: state.filters.yLabel,
    startYear: state.filters.startYear,
    endYear: state.filters.endYear,
    pestle: state.filters.pestle,
    sector: state.filters.sector,
    country: state.filters.country
});

const mapDispatchToProps = (dispatch, props) => ({
    setActivePointer: (pointer) => dispatch(setActivePointer(pointer)),
    setPotentialPointer: (pointer) => dispatch(setPotentialPointer(pointer))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(Heatmap);