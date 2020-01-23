// SET_DATABASE
export const setDataBase = (data = []) => ({
    type: 'SET_DATABASE',
    data
});

// SET_POENTIAL_POINTERS
export const setPotentialPointer = (potentialPointer = {
    id: '',
    columnLabel: '',
    measure: 0,
    relevance: '',
    likelihood: '' ,
    url: '',
    title: '',
    end_year: 0,
    topic: '',
    sector: '',
    region: '',
    pestle: ''
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
    title: '',
    end_year: 0,
    topic: '',
    sector: '',
    region: '',
    pestle: ''
}) => ({
    type: 'SET_ACTIVE_POINTER',
    activePointer
});

// CLEAR_POTENTIAL_POINTERS
export const clearPotentialPointers = () => ({
    type: 'CLEAR_POTENTIAL_POINTERS'
})