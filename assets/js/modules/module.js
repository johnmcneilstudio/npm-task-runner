#!/usr/bin/env node

'use strict';

var is = require('is_js');

module.exports = {
  init: function(name) {
    this.name = name;
    return 'Hi, '+this.name;
  },
  areYouString: function() {
    return is.string(this.name);
  }
};
