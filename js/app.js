Vue.component('saludo', {
    template: `
    <div>
        <h1>{{ saludo }}</h1>
        <h3>aghadf</h3>
    </div>
    `,
    data() {
        return {
            saludo: '¡Hola desde componte!'
        }
    },
});

const v = new  Vue({
    el: '#app'
});