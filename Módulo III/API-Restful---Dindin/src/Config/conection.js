const { Pool } = require("pg");

const pool = new Pool({
  user: 'ueldvrfrwlhwob',
  host: 'ec2-3-219-52-220.compute-1.amazonaws.com',
  database: 'ddblo1jiqraemj',
  password: 'dfd960e22cb0066ea6eddf3aba200aa54c0e9db954ced4fce2ed6e3da5329cc8',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});



const query = (text, param) => {
  return pool.query(text, param);
};

module.exports = {
  query
};