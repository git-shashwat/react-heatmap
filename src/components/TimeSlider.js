import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { connect } from 'react-redux';
import { setStartYear, setEndYear } from '../actions/filters';
import { clearPotentialPointers } from '../actions/pointers';
import ToggleButton from 'react-toggle-button'

class TimeSlider extends React.Component {
    state = {
        active: false,
        currentRange: [2016, 2060]
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
                {this.state.active ? <h1>Current Range: {`${this.props.startYear} - ${this.props.endYear}`}</h1> : <h1>Year Range</h1>}
                <div className="time-slider__toggle">
                <ToggleButton
                    value={this.state.active || false}
                    onToggle={(active) => {
                        if (active) {
                            this.props.setStartYear(undefined);
                            this.props.setEndYear(undefined);
                        } else {
                            this.props.setStartYear(2016);
                            this.props.setEndYear(2060);
                        }
                        this.props.clearPotentialPointers();
                        this.setState({ active: !active })
                    }}
                />
                </div>
                {this.state.active && 
                    <Range 
                        allowCross={false}
                        defaultValue={[2016,2060]}
                        min={2016}
                        max={2060}
                        onChange={this.onChangeRange}
                        onAfterChange={this.onNewRange}
                        trackStyle={[
                            {height: 18+'px'}
                        ]}
                        pushable={true}
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
    setEndYear: (endYear) => dispatch(setEndYear(endYear)),
    clearPotentialPointers: () => dispatch(clearPotentialPointers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlider);