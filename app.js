const product = 'Calcetines'

const app = Vue.createApp({
    data() {//Datos que recibe la aplicación de Vue
        return { 
            producto: 'Calcetines',
            descripcion: 'Made in China',
            imagen: 'assets/images/socks_blue.jpg',
            url: "https://wikipedia.org",
            stock: 8,
            enOferta: true,
            detalles: ["50% algodón", "30% lana", "20% otros materiales..."],
            modelos: [
                {cod: "A123", color: "verde", imagen: "assets/images/socks_blue.jpg"},
                {cod: "A124", color: "azul", imagen: "assets/images/socks_green.jpg"}
            ],
            unidades: 0
        }
    },
    methods: {
        aniadirCarro() {
            this.unidades++
        },
        actualizarImagen(img) {
            this.imagen = img
        }
    }
});


//Cuando carguemos la página montamos la aplicación.
window.onload = () => {
    //#app hace referencia a <div id="app">
    const appMontada = app.mount("#app");
}