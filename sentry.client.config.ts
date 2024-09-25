import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://518d18b525c9d3e8507b207545615b65@o4508013845872640.ingest.us.sentry.io/4508013860487168",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});