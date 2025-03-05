// ✅ Tumhara Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAxcU_ZCbaL76iixobeUffaVmIS5NodyRc",
  authDomain: "trishanjit-roy.firebaseapp.com",
  projectId: "trishanjit-roy",
  storageBucket: "trishanjit-roy.appspot.com",
  messagingSenderId: "447250783704",
  appId: "1:447250783704:web:efc5e0500df15f7d8826ad"
};

// ✅ Firebase Initialize
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
console.log("🔥 Firebase Connected!");