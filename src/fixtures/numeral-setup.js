import numeral from 'numeral';

export default () => {
    numeral.register('locale', 'inr', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'rupee' : 'rupees';
        },
        currency: {
            symbol: '₹'
        }
    });
    
    numeral.locale('inr');
}