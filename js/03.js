const app = new Vue({
    el: '#app',
    data: {
       saludo: 'Ciclo de vida Vue'
    },
    beforeCreate() {
        console.log('Antes de crearse');
    },
    created() {
        console.log('Al crearse');
    },
    beforeMount() {
        console.log('Antes de Montarse');
    },
    mounted() {
        console.log('Montado');
    },
    beforeUpdate() {
        console.log('Antes de actualizar');
    },
    updated() {
        console.log('Actualizado');
    },
    beforeDestroy() {
        
    },
    destroyed() {
        
    },
    methods: {
       
    },
    computed: {

    },
});