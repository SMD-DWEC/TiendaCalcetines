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
                <li v-for="review,index in reviews" :key="index">
                    ¡{{review.nombre}} dejó una puntuación de {{review.puntuacion}} estrellas!
                    <br>
                    {{review.comentario}}
                </li>
            </ul>
        </div>
        `
});