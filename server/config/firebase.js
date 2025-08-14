const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert(require('./service-account.json')),
});
module.exports = { admin, db: admin.firestore() };