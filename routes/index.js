const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
const moment = require('moment')
moment.locale('es');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const countries = await fetch('https://api.covid19api.com/summary')
  const data = await countries.json()
  console.log(moment(data.Date, "YYYYMMDD").fromNow())
  res.render('index', { data: data.Countries, time: moment(data.Date, "YYYYMMDD").startOf('day').fromNow() });
});

module.exports = router;
