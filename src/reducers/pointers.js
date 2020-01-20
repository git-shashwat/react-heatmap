const pointersDefaultState = [];

export default (state = pointersDefaultState, action) => {
    switch (action.type) {
        case 'SET_POTENTIAL_POINTER':
            return [
                ...state,
                action.potentialPointer
            ]

        case 'SET_ACTIVE_POINTER':
            return {
                activePointer: action.activePointer
            }
        default:
            return state;
    }
}