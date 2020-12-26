import * as Sentry from '@sentry/node'
// or use es6 import statements
// import * as Sentry from '@sentry/node';

// or use es6 import statements
// import * as Tracing from '@sentry/tracing';

export function initSentry() {
  Sentry.init({
    dsn:
      'https://be5ac78cc6f24a609d2a6f43b70a9876@o496023.ingest.sentry.io/5571054',

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
    environment: process.env.DEBUG === 'true' ? 'development' : 'production',
  })
}
