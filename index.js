import Vue from 'vue';
import post from './post.js';

var app = new Vue({
    el: '#app',
    data() {
        return {
            newPost: '',
            posts: [
                {
                    text: "text 1",
                },
                {
                    text: "text 2",
                },
                {
                    text: "text 3",
                },
            ],
        }
    },
    watch: {
    },
    methods: {
        addPost(text) {
            this.posts.unshift({
                text: text,
            });
        },
    }
});