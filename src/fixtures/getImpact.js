export default (param) => {
    if (param === 1) {
        return 'Low';
    } else if (param === 2) {
        return 'Medium';
    } else if (param === 3) {
        return 'High';
    } else {
        return '';
    }
}