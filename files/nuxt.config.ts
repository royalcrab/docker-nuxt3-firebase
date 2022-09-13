import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        firebase: {
            apiKey: process.env.NUXT_FIREBASE_API_KEY,
            authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NUXT_FIREBASE_STRAGE_BUCKET,
            messagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NUXT_FIREBASE_APP_ID,
        }
    },
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css"
    ],
})
