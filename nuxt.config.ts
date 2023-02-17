// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head:{ 
            title: "Tech Diaries"
        }
    },
    modules: [    '@nuxt/content'  ], 
    content: {    
        // https://content.nuxtjs.org/api/configuration  
    }
})
