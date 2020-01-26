import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';

const PointersTable = (props) => {
    const potentialPointers = props.potentialPointers.length ? props.potentialPointers : props.database;
    let tableEntries = potentialPointers.map(pointer => ({
        ...pointer,
        title: <a href={pointer.url} className="active-pointer__link" target="_blank">{pointer.title}</a>
    }))
    const data = {
        columns: [
            {
                label: 'Title',
                field: 'title',
                sort: 'asc'
            }, 
            {
                label: 'Topic',
                field: 'topic',
                sort: 'asc'
            }, 
            {
                label: 'Year',
                field: 'end_year',
                sort: 'asc'
            }, 
            {
                label: 'Measure Value',
                field: 'measure',
                sort: 'asc'
            }, 
            {
                label: 'Sector',
                field: 'sector',
                sort: 'asc'
            }, 
            {
                label: 'Region',
                field: 'region',
                sort: 'asc'
            },
            {
                label: 'Pestle',
                field: 'pestle',
                sort: 'asc'
            }
        ],
        rows: tableEntries
    }

    return (
        <div className="pointers-table-component" id="pointers-table">
            <MDBDataTable
                responsive 
                striped
                bordered
                autoWidth
                hover
                data={data}
            />  
        </div>
    );
}

const mapStateToProps = (state) => ({
    database: state.pointers.database,
    potentialPointers: state.pointers.potentialPointers
});

export default connect(mapStateToProps)(PointersTable);