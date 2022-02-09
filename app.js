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
        /**
         * 
         * @param {Boolean} estado Si es verdadero, añadimos al carrito, si es false, borramos la última.
         * @param {Number} id 
         */
        actualizarCarro(id) {
            this.carrito.push(id);
        },
        borrarCarrito(){
            this.carrito.pop()
        }
    }
});


//Cuando carguemos la página montamos la aplicación.
window.onload = () => {
    //#app hace referencia a <div id="app">
    const appMontada = app.mount("#app");
}