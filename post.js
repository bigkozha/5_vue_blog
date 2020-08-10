import Vue from 'vue';

export default Vue.component('post', {
    name: 'post',
    template:
        `<div class="card m-2">
        <div class="card-body">
            {{text}}
        </div>
    </div>`,
    props: ['text'],
    data() {
        return {
        }
    },
});