import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { connect } from 'react-redux';
import { setStartYear, setEndYear } from '../actions/filters';
import ToggleButton from 'react-toggle-button'

class TimeSlider extends React.Component {
    state = {
        active: false,
        currentRange: [2016, 2022]
    }
    onChangeRange = (Range) => {
        this.setState({ currentRange: Range, active: true })
    }
    onNewRange = () => {
        this.props.setStartYear(this.state.currentRange[0]);
        this.props.setEndYear(this.state.currentRange[1]);
    }
    render() {
        return (
            <div className="time-slider">
                {this.state.active ? <h1>Current Range: {`${this.props.startYear} - ${this.props.endYear}`}</h1> : <h1>Select Time Range</h1>}
                <div className="time-slider__toggle">
                <ToggleButton
                    value={this.state.active || false}
                    onToggle={(active) => {
                        this.setState({ active: !active })
                    }}
                />
                </div>
                {this.state.active && 
                    <Range 
                        allowCross={false}
                        defaultValue={this.state.currentRange}
                        min={2016}
                        max={2022}
                        onChange={this.onChangeRange}
                        onAfterChange={this.onNewRange}
                        trackStyle={[
                            {height: 18+'px'}
                        ]}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    startYear: state.filters.startYear,
    endYear: state.filters.endYear
});

const mapDispatchToProps = (dispatch) => ({
    setStartYear: (startYear) => dispatch(setStartYear(startYear)),
    setEndYear: (endYear) => dispatch(setEndYear(endYear))
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlider);