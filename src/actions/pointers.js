// SET_ACTIVE_POINTER
export const setPotentialPointer = (potentialPointer = {
    id: '',
    columnLabel: '',
    measure: 0,
    relevance: '',
    likelihood: '' ,
    url: '',
    title: ''
}) => ({
    type: 'SET_POTENTIAL_POINTER',
    potentialPointer
});

// SET_ACTIVE_POINTER
export const setActivePointer = (activePointer = {
    id: '',
    columnLabel: '',
    measure: 0,
    relevance: '',
    likelihood: '' ,
    url: '',
    title: ''
}) => ({
    type: 'SET_ACTIVE_POINTER',
    activePointer
});