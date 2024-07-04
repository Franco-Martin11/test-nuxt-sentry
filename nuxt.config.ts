// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   runtimeConfig: {
//     public: {
//       sentry: {
//         dsn: 'https://e34c320ac037191bb1a2b2fa9ec7feb3@o4507368644542464.ingest.us.sentry.io/4507544506335232',
//         environment: 'development',
//       }
//     }
//   }
// })


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // curl http://localhost:3000/api/error
  ssr: true,
  runtimeConfig: {
    public: {
      sentry: {
        dsn: 'https://fc85ac8cb7035be2584a7f4e4609e1ef@o4507368644542464.ingest.us.sentry.io/4507544676073472',
        environment: 'development',
      }
    }
  }
})
