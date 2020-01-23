import Relevance from './getRelevance';
import Impact from './getImpact';
import Likelihood from './getLikelihood';

export default (database ,xLabel, yLabel, startYear, endYear, pestle, sector, country, topic, region, measure) => {
    let xheaders = new Set(), yheaders = new Set();
    let pointersCollection = [];
    database.forEach(data => {
        if (
            data[xLabel] !== ""
            && data[yLabel] !== ""
            && data[measure] !== ""
            && ((startYear === undefined || startYear === "") ? true : data.start_year >= startYear)
            && ((endYear === undefined || endYear === "") ? true : data.end_year <= endYear)
            && ((pestle === 'all' || pestle === undefined) ? true : data.pestle === pestle)
            && ((sector === 'all' || sector === undefined) ? true : data.sector === sector)
            && ((country === 'all' || country === undefined) ? true : data.country === country)
            && ((topic === 'all' || topic === undefined) ? true : data.topic === topic)
            && ((region === 'all' || region === undefined) ? true : data.region === region)
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
                    && ((startYear === undefined || startYear === "") ? true : database[k].start_year >= startYear)
                    && ((endYear === undefined || endYear === "") ? true : database[k].end_year <= endYear)
                    && ((pestle === 'all' || pestle === undefined) ? true : database[k].pestle === pestle)
                    && ((sector === 'all' || sector === undefined) ? true : database[k].sector === sector)
                    && ((country === 'all' || country === undefined) ? true : database[k].country === country)
                    && ((topic === 'all' || topic === undefined) ? true : database[k].topic === topic)
                    && ((region === 'all' || region === undefined) ? true : database[k].region === region)
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

                    // End Year evaluation
                    rowData.end_year = database[k].end_year;

                    // Topic evaluation
                    rowData.topic = database[k].topic;

                    // Sector evaluation
                    if (database[k].sector !== "") {
                        rowData.sector = database[k].sector;
                    }

                    // Region evaluation
                    if (database[k].region !== "") {
                        rowData.region = database[k].region;
                    }

                    // Pestle evaluation
                    if (database[k].pestle !== "") {
                        rowData.pestle = database[k].pestle
                    }

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
                    rowCollection.push({ ...rowData , color: "#08B6CE" });
                } else if (measureReading > 12 && measureReading <= 30) {
                    rowCollection.push({ ...rowData, color: "#78D637" });
                } else if (measureReading > 30) {
                    rowCollection.push({ ...rowData, color: "red" });
                } else {
                    rowCollection.push({ ...rowData, measure: "", color: "white" });
                }
            } else if (measure === 'likelihood') {
                if (measureReading > 0 && measureReading <= 2) {
                    rowCollection.push({ ...rowData , color: "#08B6CE" });
                } else if (measureReading > 2 && measureReading < 3) {
                    rowCollection.push({ ...rowData, color: "#78D637" });
                } else if (measureReading >= 3) {
                    rowCollection.push({ ...rowData, color: "red" });
                } else {
                    rowCollection.push({ ...rowData, measure: "", color: "white" });
                }
            } else {
                if (measureReading > 0 && measureReading <= 2) {
                    rowCollection.push({ ...rowData , color: "#08B6CE" });
                } else if (measureReading > 2 && measureReading <= 4) {
                    rowCollection.push({ ...rowData, color: "#78D637" });
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