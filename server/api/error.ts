export default defineEventHandler((event) => {
  if (event.context.$sentry) {
    event.context.$sentry.captureException(new Error('This is a server-side error!'))
  }
})
