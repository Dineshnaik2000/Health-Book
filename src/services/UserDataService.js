
import firebase from 'firebase';
const database = firebase.ref("/Patients");

class UserDataService {
    getAll() {
        return database;
        // return db;
    }
    create(tutorial) {
        return database.push(tutorial);
    }
    update(key, value) {
        return database.child(key).update(value);
    }
    delete(key) {
        return database.child(key).remove();
    }
    deleteAll() {
        return database.remove();
    }
}
export default new UserDataService();

