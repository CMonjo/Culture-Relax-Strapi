'use strict';

/**
 * spectacle service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spectacle.spectacle');
