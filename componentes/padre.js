Vue.component('padre', {
    template: //html
        `
        <div class="p-5 bg-dark text-white">
            <button @click="numeroPadre++">+</button>
            <h2>Componente Padre {{ numeroPadre }}</h2>
            {{ nombrePadre }}
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
        </div>
        `,
    data() {
        return {
            numeroPadre: 567,
            nombrePadre: ''
        }
    },
});