// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition:{
            name: "page",
            mode: "out-in"
        },
        head:{ 
            title: "Tech Diaries"
        }
    },
    modules: [    '@nuxt/content'  ], 
    content: {    
        // https://content.nuxtjs.org/api/configuration  
    }
})
