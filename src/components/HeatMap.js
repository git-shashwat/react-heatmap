import React from 'react';
import getIntensity from '../fixtures/getIntensity';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setPotentialPointer, setActivePointer } from '../actions/pointers';

const Heatmap = (props) => {
    const pointersCollection = getIntensity(props.database ,props.xLabel,props.yLabel, props.startYear, props.endYear, props.pestle, props.sector, props.country, props.topic, props.region, props.measure);
    const Xheaders = pointersCollection.xheaders;
    const measureCollection = pointersCollection.pointersCollection;

    if (Xheaders.length === 0) {
        return (
            <div className="table-container">
                <h1>No matches for the applied filters!</h1>
            </div>
        );
    }

    return (
        <div className="table-container">
            <Table size="sm" borderless className="table">
                <tbody>
                    <tr>
                        <th></th>
                        {Xheaders.map(header => <th className="table__header" key={header}>{header}</th>)}
                    </tr>
                    {measureCollection.map(collection => (
                        <tr>
                            <td className="table__sector" key={collection.rowLabel}>{collection.rowLabel}</td>
                            {collection.rowCollection.map(({ id, measure, color, columnLabel, relevance, likelihood, url, title, end_year, topic, sector, region, pestle }) => {
                                if (measure !== "") {
                                    const pointer = {
                                        id,
                                        measure,
                                        columnLabel,
                                        relevance,
                                        likelihood,
                                        url,
                                        title,
                                        end_year,
                                        topic,
                                        sector,
                                        region,
                                        pestle
                                    }
                                    // Isko aage dekhenge speed badhane ke liye
                                    props.setPotentialPointer(pointer);
                                    return (
                                        <td
                                            className="table__cell"
                                            onClick={() => props.setActivePointer(pointer)}
                                            title={`${measure}| ${columnLabel}| ${collection.rowLabel}`}
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
        <div className="heatmap-metric">
            Low <div className="heatmap-metric__blob" style={{ backgroundColor: "#08B6CE" }}></div>
            <div className="heatmap-metric__blob" style={{ backgroundColor: "#78D637" }}></div>
            <div className="heatmap-metric__blob" style={{ backgroundColor: "red" }}></div> High
        </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    database: state.pointers.database,
    xLabel: state.filters.xLabel,
    yLabel: state.filters.yLabel,
    startYear: state.filters.startYear,
    endYear: state.filters.endYear,
    pestle: state.filters.pestle,
    sector: state.filters.sector,
    country: state.filters.country,
    topic: state.filters.topic,
    region: state.filters.region,
    measure: state.filters.measure
});

const mapDispatchToProps = (dispatch, props) => ({
    setActivePointer: (pointer) => dispatch(setActivePointer(pointer)),
    setPotentialPointer: (pointer) => dispatch(setPotentialPointer(pointer))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(Heatmap);