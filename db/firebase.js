const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);