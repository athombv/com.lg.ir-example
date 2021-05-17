'use strict';

const RFDeviceLG = require('../../lib/RFDeviceLG');

module.exports = class extends RFDeviceLG {

  static CAPABILITIES = {
    onoff: {
      true: 'POWER_ON',
      false: 'POWER_OFF',
    },
    volume_mute: 'MUTE_TOGGLE',
    volume_up: 'VOLUME_UP',
    volume_down: 'VOLUME_DOWN',
    channel_up: 'CHANNEL_UP',
    channel_down: 'CHANNEL_DOWN',
  }

};
