/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'peep-blog-client',
		environment: environment,
		baseURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		}
	};

	if (environment === 'development') {
		ENV.contentSecurityPolicy = {
			'default-src': "'none'",
			'script-src': "'self'",
			'font-src': "'self'",
			'connect-src': "'self' http://localhost:4000",
			'img-src': "'self'",
			'style-src': "'self'",
			'media-src': "'self'"
		};
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

	}

	return ENV;
};
