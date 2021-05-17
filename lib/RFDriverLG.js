'use strict';

const { RFDriver } = require('homey-rfdriver');
const RFSignalLG = require('./RFSignalLG');

module.exports = class extends RFDriver {

  static SIGNAL = RFSignalLG;

};
