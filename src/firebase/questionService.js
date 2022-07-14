//was supposed to be used


// const firebaseConfig = {
//     apiKey: "AIzaSyAr6l0WtiD_jF8kT_LNfR-X9eVMMf1DuJg",
//     authDomain: "quiz-app-a2e09.firebaseapp.com",
//     projectId: "quiz-app-a2e09",
//     storageBucket: "quiz-app-a2e09.appspot.com",
//     messagingSenderId: "856442129330",
//     appId: "1:856442129330:web:83f70a3436ec102010f2ab",
//     measurementId: "G-DHHLHHQ7H4",
//   };

//   let temp = [];
//   initializeApp(firebaseConfig);
//   const db = getFirestore();
//   const colRef = collection(db, 'questions');
//   getDocs(colRef)
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       temp.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(temp);
//   })
//   .catch(err => {
//     console.log("err:" + err);
//   });

//   export default temp;