Vue.component('titulo', {
    template: `
        <h1>Con Vuex</h1>
    `
});

Vue.component('numero', {
    template: `
      <div>
        <h2>número {{ elNumero }}</h2>
        <hijo></hijo>
      </div>
    `,
    computed: {
        ...Vuex.mapState(['elNumero'])
    },
});

Vue.component('hijo', {
    template: `
    <div>
        <button @click="aumentarElNumero">+</button>
        <button @click="disminuirElNumero(2)">-</button>
        <button @click="obtenerCursos">getCursos()</button>
        <h3>número en hijo {{ elNumero }}</h3>
        <ul v-for="curso of cursos">
            <li>{{ curso.nombre }}</li>
        </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['elNumero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentarElNumero', 'disminuirElNumero']),
        ...Vuex.mapActions(['obtenerCursos'])
    },
});

const store = new Vuex.Store({
    state: {
        elNumero: 10,
        cursos: []
    },
    mutations: {
        aumentarElNumero(state) {
            state.elNumero += 10;
        },
        disminuirElNumero(state, num) {
            state.elNumero -= num;
        },
        llenarCursos(state, cursosAction) {
            state.cursos = cursosAction
        }
    },
    actions: {
        obtenerCursos: async function({ commit }) {
            const data = await fetch('backend/cursos.json');
            const cursos = await data.json();
            commit('llenarCursos', cursos)
        }
    }
});

new Vue({
    el: '#app',
    store: store
});