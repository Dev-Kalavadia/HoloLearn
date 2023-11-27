/**
 * auth function for handing authentication based on client token
 */

// const admin = require("firebase-admin");
const {onCall} = require("firebase-functions/v2/https");

// const logger = require("firebase-functions/logger");

const {get} = require("lodash");

const {getDecodedIdToken} = require("./utils");

const {getFirestore} = require("./utils");

const {getAuth} = require("./utils");

const {getStorage} = require("./utils");

const {getMessaging} = require("./utils");

const {getFunctions} = require("./utils");

const {getRemoteConfig} = require("./utils");

const {getPerformance} = require("./utils");


const auth = onCall(async (data, context) => {
  const token = get(data, "token");

  const decodedIdToken = await getDecodedIdToken(token);

  const uid = get(decodedIdToken, "uid");

  const auth = getAuth();

  const user = await auth.getUser(uid);

  const firestore = getFirestore();

  const userRef = firestore.collection("users").doc(uid);

  const userDoc = await userRef.get();

  const userDocData = userDoc.data();

  const userDocExists = userDoc.exists;

  const storage = getStorage();

  const messaging = getMessaging();

  const functions = getFunctions();

  const remoteConfig = getRemoteConfig();

  const performance = getPerformance();

  return {
    user,
    userDocData,
    userDocExists,
    storage,
    messaging,
    functions,
    remoteConfig,
    performance,
  };
},
);

module.exports = auth;

