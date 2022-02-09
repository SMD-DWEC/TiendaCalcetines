const product = 'Calcetines'

const app = Vue.createApp({
    data() {//Datos que recibe la aplicación de Vue
        return { 
            carrito: [],
            detalles: "Fabricado en Taiwan al 70%",
            premium: true
        }
    },
    methods: {
        actualizarCarro(id) {
            console.log(id);
            this.carrito.push(id);
        }
    }
   
});


//Cuando carguemos la página montamos la aplicación.
window.onload = () => {
    //#app hace referencia a <div id="app">
    const appMontada = app.mount("#app");
}