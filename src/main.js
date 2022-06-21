
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


// Global Register Directives
app.config.globalProperties.$filters = {
    currencyUSD(value){
        return '$' + value.toUpperCase()
    }
}



app.directive("colorChange", (element,binding) => {
    element.onmouseover = function(){
        element.style.fontSize=binding.value
    }
}).mount('#app')


