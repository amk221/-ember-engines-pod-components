/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'foo',
    podModulePrefix: 'foo/pods',
    environment
  };

  return ENV;
};
