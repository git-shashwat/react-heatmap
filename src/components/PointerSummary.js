import React from 'react';
import { connect } from 'react-redux';

const PointerSummary = (props) => {
    if (props.pointer) {
        return (
            <div className="active-pointer">
                <h1>{props.pointer.columnLabel}</h1>
                <p className="active-pointer__sub-title">{`${props.pointer.measure} | ${props.pointer.relevance} | ${props.pointer.likelihood}`}</p>
                <a className="active-pointer__link" href={props.pointer.url} target="_blank">{props.pointer.title}</a>
                <br></br>
                <a className="active-pointer__link" href="#pointers-table">...more</a>
            </div>
        );
    } else {
        return (
            <div className="active-pointer">
                <h1 className="active-pointer--title">Click on a Node</h1>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    pointer: state.pointers.activePointer
});

export default connect(mapStateToProps)(PointerSummary);