export const credentials = {
  valid: {
    username: process.env.APP_USERNAME || 'Admin',
    password: process.env.APP_PASSWORD || 'admin123'
  },
  invalid: {
    username: 'invalid.user',
    password: 'wrong.password'
  }
};
