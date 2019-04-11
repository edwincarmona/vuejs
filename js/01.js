const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Manzana', cantidad: 542.6},
            {nombre: 'Uva', cantidad: 265},
            {nombre: 'Pera', cantidad: 789},
            {nombre: 'Plátano', cantidad: 0},
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        addFruta () {
            let fruta = {
                            nombre: this.nuevaFruta,
                            cantidad: 0
                        };

            this.frutas.push(fruta);
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas () {
            this.total = 0;
            
            for (const fruta of this.frutas) {
                this.total += fruta.cantidad;
            }

            return this.total;
        }
    },
});