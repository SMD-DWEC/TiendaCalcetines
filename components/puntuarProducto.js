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

        <br />
        <label for="recomendar">¿Recomendarias este producto?</label>
        <select id="recomendar" v-model.number="recomendado">
            <option>Sí</option>
            <option>No</option>
        </select>

        <input class="button" type="submit" value="Enviar">
        

    </form>
    `,
    data() {
        return {
            nombre: "",
            comentario: "",
            puntuacion: null,
            recomendado: null
        }
    },
    methods: {
        alEnviar() {
            //Comprobamos que no haya campos vacios...
            if(this.nombre == "" || this.comentario == "" || this.puntuacion == null || this.recomendado == null) {
                alert("Hay algunos campos incompletos...");
                return;
            }

            let reviewProducto = {
                nombre: this.nombre,
                comentario: this.comentario,
                puntuacion: this.puntuacion,
                recomendado: this.recomendado,
            }
            this.$emit("producto-puntuado", reviewProducto);


            //Al enviar reseteamos los campos...
            this.nombre = "",
            this.comentario = "",
            this.puntuacion = null,
            this.recomendado = null
            
        }
    }

});