export default (param) => {
    if (param === 1) {
        return 'Vague';
    } else if (param === 2) {
        return 'Early stage'
    } else if (param === 3) {
        return 'Graining Traction'
    } else if (param === 4) {
        return 'Evolving'
    } else if (param === 5) {
        return 'Established'
    } else if (param === 6) {
        return 'Expansionary'
    } else if (param === 7) {
        return 'Growing'
    } else {
        return ''
    }
};