import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAU2qCIc0qDk6buUNm9Wivwa2X5hIcgl4E",
    authDomain: "products-list-d6acb.firebaseapp.com",
    projectId: "products-list-d6acb",
    storageBucket: "products-list-d6acb.appspot.com",
    messagingSenderId: "1012051648225",
    appId: "1:1012051648225:web:beb2998dad5bd0f512e1a0"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

const withStore = (Component) => (props) => {

    const getProducts = () => {
        return db.collection("products").get('products').then((response) => {
            return response.docs.map((doc) => {
                return ({ id: doc.id, ...doc.data() })
            });
        });
    }

    return <Component {...props} getProducts={getProducts} />
}

export default withStore