app.component("lista-puntuaciones", {
    props: {
        puntuaciones: {
            type: Array,
            required: true
        }
    },
    template: 
        /*html*/`
        <div class="review-container">
            <h3>Puntuaciones</h3>
            <ul>
                <li v-for="(puntuacion,index) in puntuaciones" :key="index">
                    ¡{{puntuacion.nombre}} dejó una puntuación de {{puntuacion.puntuacion}} estrellas!
                    <br>
                    {{puntuacion.comentario}}
                    <br>
                    Producto recomendado: {{puntuacion.recomendado}}
                </li>
            </ul>
        </div>
        `
});