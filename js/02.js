const app = new Vue({
    el: '#app',
    data: {
       elMensaje: 'Este es un nuevo mensaje para mostrar',
       contador: 0
    },
    methods: {
       
    },
    computed: {
        elMensajeInvertido() {
                return this.elMensaje.split('').reverse().join('');
        },
        color() {
            return {
                'bg-success' : this.contador <= 30,
                'bg-warning' : this.contador > 30 && this.contador <= 60,
                'bg-danger'  : this.contador > 60
            }
        }
    },
});