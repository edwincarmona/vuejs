Vue.component('hijo', {
    template: //html
        `
        <div class="py-5">
            <h4 class="bg-success">
                Componente hijo: {{ numero }}
            </h4>
            <h4 class="bg-danger">
                Nombre: {{ palPadre }}
            </h4>
        </div>
        `,
        props: ['numero'],
        data() {
            return {
                palPadre: 'del hijo al padre'
            }
        },
        mounted() {
            this.$emit('nombreHijo', this.palPadre)
        },
})