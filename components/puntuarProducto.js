app.component("puntuar-producto", {

    template:
    /*html*/`
    <form class="review-form" @submit.prevent="alEnviar">
        <h3>¡Escribe tu opinión!</h3>
        <label>Nombre</label>
        <input id="nombre" v-model="nombre">
        
        <label>Comentario</label>
        <textarea id="comentario" v-model="comentario"></textarea>
        
        <label>Puntuación</label>
        <select id="rating" v-model.number="puntuacion">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="Enviar">
        

    </form>
    `,
    data() {
        return {
            nombre: "",
            comentario: "",
            puntuacion: null
        }
    },
    methods: {
        alEnviar() {
            let reviewProducto = {
                nombre: this.nombre,
                comentario: this.comentario,
                puntuacion: this.puntuacion
            }
            this.$emit("producto-puntuado", reviewProducto);


            //Al enviar reseteamos los campos...
            this.nombre = "",
            this.comentario = "",
            this.puntuacion = null
        }
    }

});