import Database from '../../public/database';
import Relevance from './getRelevance';
import Impact from './getImpact';
import Likelihood from './getLikelihood';

const database = Database();

export default (xLabel, yLabel, startYear, endYear, pestle, sector, country, measure) => {
    let xheaders = new Set(), yheaders = new Set();
    let pointersCollection = [];
    database.forEach(data => {
        if (
            data[xLabel] !== ""
            && data[yLabel] !== ""
            && data[measure] !== ""
            && data.start_year >= startYear
            && (data.end_year <= endYear)
            && (pestle === 'all' ? true : data.pestle === pestle)
            && (sector === 'all' ? true : data.sector === sector)
            && (country === 'all' ? true : data.country === country)
        ) {
            xheaders.add(data[xLabel]);
            yheaders.add(data[yLabel]);
        }
    });

    xheaders = Array.from(xheaders).sort();
    yheaders = Array.from(yheaders).sort();

    // Actual evaluation
    for (let i = 0; i < yheaders.length; ++i) {
        let rowCollection = [],
            rowData = {};
        for (let j = 0; j < xheaders.length; ++j) {
            let measureReading = 0, count = 0;
            rowData.columnLabel = xheaders[j];
            for (let k = 0; k < database.length; ++k) {
                if (
                    database[k][yLabel] === yheaders[i]
                    && database[k][xLabel] === xheaders[j]
                    && database[k][measure] !== ""
                    && (database[k].start_year >= startYear)
                    && (database[k].end_year <= endYear)
                    && (pestle === 'all' ? true : database[k].pestle === pestle)
                    && (sector === 'all' ? true : database[k].sector === sector)
                    && (country === 'all' ? true : database[k].country === country)
                    ) {

                    // Measure evaluation
                    measureReading += database[k][measure];
                    count++;

                    // ID evaluation
                    rowData.id = database[k].id;

                    // URL evaluation
                    rowData.url = database[k].url || 'https://www.google.com';

                    // Title evaluation
                    rowData.title = database[k].title || 'Not Available';

                    // Relevance mapping
                    rowData.relevance = Relevance(database[k].relevance);

                    // Likelihood mapping
                    rowData.likelihood = Likelihood(database[k].likelihood);

                    // Impact mapping
                    rowData.impact = Impact(database[k].impact);
                }
            }

            // Average intensity 
            count ? measureReading /= count : measureReading;
            measureReading = Math.round(measureReading*100)/100;
            rowData.measure = measureReading;

            if (measure === 'intensity') {
                if (measureReading > 0 && measureReading <= 12) {
                    rowCollection.push({ ...rowData , color: "#87CEEB" });
                } else if (measureReading > 12 && measureReading <= 30) {
                    rowCollection.push({ ...rowData, color: "#90ee90" });
                } else if (measureReading > 30) {
                    rowCollection.push({ ...rowData, color: "red" });
                } else {
                    rowCollection.push({ ...rowData, measure: "", color: "white" });
                }
            } else if (measure === 'likelihood') {
                if (measureReading > 0 && measureReading <= 2) {
                    rowCollection.push({ ...rowData , color: "#87CEEB" });
                } else if (measureReading > 2 && measureReading < 3) {
                    rowCollection.push({ ...rowData, color: "#90ee90" });
                } else if (measureReading >= 3) {
                    rowCollection.push({ ...rowData, color: "red" });
                } else {
                    rowCollection.push({ ...rowData, measure: "", color: "white" });
                }
            } else {
                if (measureReading > 0 && measureReading <= 2) {
                    rowCollection.push({ ...rowData , color: "#87CEEB" });
                } else if (measureReading > 2 && measureReading <= 4) {
                    rowCollection.push({ ...rowData, color: "green" });
                } else if (measureReading > 4) {
                    rowCollection.push({ ...rowData, color: "red" });
                } else {
                    rowCollection.push({ ...rowData, measure: "", color: "white" });
                }
            }
        }
        pointersCollection.push({ rowLabel: yheaders[i],rowCollection });
    }
    return {
        xheaders,
        yheaders,
        pointersCollection
    };
}

// export default (xLabel, yLabel, xheaders, yheaders, startYear, endYear) => {
// }