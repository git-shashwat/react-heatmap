const pointersDefaultState = {
    database: [],
    potentialPointers: [],
    activePointer: undefined
};

export default (state = pointersDefaultState, action) => {
    switch (action.type) {
        case 'SET_DATABASE':
            return {
                ...state,
                database: action.data
            }

        case 'SET_POTENTIAL_POINTER':
            const currentPointers = state.potentialPointers;
            return {
                ...state,
                potentialPointers: [...currentPointers,action.potentialPointer]
            }

        case 'SET_ACTIVE_POINTER':
            return {
                ...state,
                activePointer: action.activePointer
            }

        case 'CLEAR_POTENTIAL_POINTERS':
            return {
                ...state,
                potentialPointers: []
            }

        default:
            return state;
    }
}