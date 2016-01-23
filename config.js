module.exports = {
  db: {
    uri: process.env.MONGOLAB_URI,
    options: {},
  },
  session: {
    secret: process.env.SESSION_SECRET || 'dev-secret',
  },
};
