app.component("vista-productos", {
    props: {
        detalles: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <ul>    
        <li>{{detalles}}</li>
    </ul>
    `
});