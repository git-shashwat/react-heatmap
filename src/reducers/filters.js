const filtersReducerDefaultState = {
    xLabel: "",
    yLabel: ""
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_X_LABEL':
            return {
                ...state,
                xLabel: action.xLabel
            }

        case 'SET_Y_LABEL':
            return {
                ...state,
                yLabel: action.yLabel
            }

        case 'SET_START_YEAR':
            return {
                ...state,
                startYear: action.startYear
            }

        case 'SET_END_YEAR':
            return {
                ...state,
                endYear: action.endYear
            }
        
        default:
            return state;
    }
}