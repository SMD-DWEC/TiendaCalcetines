const product = 'Calcetines'

const app = Vue.createApp({
    data() {//Datos que recibe la aplicación de Vue
        return { 
            unidades: 0,
            detalles: "Fabricado en Taiwan 70%",
            premium: true
        }
    },
    methods: {
        actualizarCarro() {
            this.unidades++;
        }
    }
   
});


//Cuando carguemos la página montamos la aplicación.
window.onload = () => {
    //#app hace referencia a <div id="app">
    const appMontada = app.mount("#app");
}