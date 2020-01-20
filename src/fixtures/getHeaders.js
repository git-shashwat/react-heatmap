import Database from '../../public/database';

const database = Database();

export default (param) => {
    let collection = new Set();

    database.forEach(data => {
        if (data[param] !== "") {
            collection.add(data[param]);
        }
    });

    collection = Array.from(collection).sort();

    return collection;
}