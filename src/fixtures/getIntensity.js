import Database from '../../public/database';
import Relevance from './getRelevance';
import Impact from './getImpact';
import Likelihood from './getLikelihood';

const database = Database();

export default (xLabel, yLabel, startYear, endYear) => {
    let xheaders = new Set(), yheaders = new Set();
    database.forEach(data => {
        if (
            data[xLabel] !== ""
            && data[yLabel] !== ""
            && data.intensity !== ""
            && data.start_year >= startYear
            && (data.end_year <= endYear)
        ) {
            xheaders.add(data[xLabel]);
            yheaders.add(data[yLabel]);
        }
    });

    xheaders = Array.from(xheaders).sort();
    yheaders = Array.from(yheaders).sort();

    // Actual evaluation
    let pointersCollection = [];
    for (let i = 0; i < yheaders.length; ++i) {
        let rowCollection = [],
            rowData = {};
        for (let j = 0; j < xheaders.length; ++j) {
            let intensity = 0, count = 0;
            rowData.columnLabel = xheaders[j];
            for (let k = 0; k < database.length; ++k) {
                if (
                    database[k][yLabel] === yheaders[i]
                    && database[k][xLabel] === xheaders[j]
                    && database[k].intensity !== ""
                    && (database[k].start_year >= startYear)
                    && (database[k].end_year <= endYear)
                    ) {

                    // Intensity evaluation
                    intensity += database[k].intensity;
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
            count ? intensity /= count : intensity ;
            intensity = Math.round(intensity*100)/100;
            rowData.intensity = intensity;

            if (intensity > 0 && intensity <= 12) {
                rowCollection.push({ ...rowData , color: "#87CEEB" });
            } else if (intensity > 12 && intensity <= 30) {
                rowCollection.push({ ...rowData, color: "#90ee90" });
            } else if (intensity > 30) {
                rowCollection.push({ ...rowData, color: "red" });
            } else {
                rowCollection.push({ ...rowData, intensity: "", color: "white" });
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