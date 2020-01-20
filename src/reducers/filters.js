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
        
        case 'SET_PESTLE':
            return {
                ...state,
                pestle: action.pestle
            }

        case 'SET_SECTOR':
            return {
                ...state,
                sector: action.sector
            }

        case 'SET_COUNTRY':
            return {
                ...state,
                country: action.country
            }

        case 'SET_MEASURE':
            return {
                ...state,
                measure: action.measure
            }

        default:
            return state;
    }
}