module.exports = {
  db: {
    uri: process.env.MONGOLAB_URI,
    options: {},
  },
  session: {
    secret: process.env.SESSION_SECRET || 'dev-secret',
  },
  auth: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
};
