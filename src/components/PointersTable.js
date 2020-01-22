import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';

const PointersTable = (props) => {

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
        rows: props.potentialPointers
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
    potentialPointers: state.pointers.potentialPointers
});

export default connect(mapStateToProps)(PointersTable);