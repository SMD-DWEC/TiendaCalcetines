app.component("vista-productos", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/`


    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <a :href=url><img :class="{outOfStockImg: enStock<=0}" :src=imagen></a>
          </div>

          <div class="product-info">
            <h1>{{producto}}</h1>
            <p>{{descripcion}}</p>

            <p v-if="enStock > 5">Disponible</p>
            <p v-else-if="enStock > 0">¡Últimas unidades!</p>
            <p v-else>No Disponible</p>

            <p>Envio: {{envio}}</p>
      
            <p v-if="enOferta">¡¡En oferta!!</p>
    
            <ul>
              <li v-for="detalle, i in detalles">{{ i + ": " + detalle}}</li>
            </ul>
      
            <div class="color-circle"
              v-for="modelo, id in modelos"
              :key="modelo.cod"
              @mouseover="actualizarVariante(id)"
              :style="{ backgroundColor: modelo.color }"
            ></div>
      
            <button class="button" :class="{disabledButton: enStock<=0}" :disabled="enStock <=0" @click="aniadirCarro(true)">Comprar</button>
          </div>
        </div>
    </div>
    
    <lista-puntuaciones :puntuaciones="resenias"></lista-puntuaciones>
    <puntuar-producto @producto-puntuado="dejaResenia"></puntuar-producto>

    `,
    data() {//Datos que recibe la aplicación de Vue
        return { 
            producto: 'Calcetines',
            descripcion: 'Made in China',
            url: "https://wikipedia.org",
            enOferta: true,
            detalles: ["50% algodón", "30% lana", "20% otros materiales..."],
            modelos: [
                {cod: "A123", color: "green", imagen: "assets/images/socks_green.jpg", cantidad: 5},
                {cod: "A124", color: "blue", imagen: "assets/images/socks_blue.jpg", cantidad: 0}
            ],
            varianteSeleccionada: 0,
            enVenta: true,
            resenias: []
        }
    },
    methods: {
        //Añadimos unidades al carrito...
        aniadirCarro(estado) {
            this.$emit("aniadir-al-carro",this.modelos[this.varianteSeleccionada].cod);
            /*estado ? this.unidades++ : this.unidades--;

            //Evitamos que se pueda retirar menos de 0...
            if(this.unidades <0) this.unidades = 0;*/
        },
        actualizarVariante(index) {
            this.varianteSeleccionada = index;
        },
        dejaResenia(resenia) {
            console.log(resenia);
            this.resenias.push(resenia);
        }
    },
    computed: {
        seVende() {
            return this.enVenta;
        },
        imagen() {
            return this.modelos[this.varianteSeleccionada].imagen;
        },
        enStock() {
            return this.modelos[this.varianteSeleccionada].cantidad;
        },
        envio() {
            if(this.premium) return 'Gratis';
            else return 2.90+"€";
        }
    }
})