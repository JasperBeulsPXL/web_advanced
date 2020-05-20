<template>
    <div id="app">
        <AddTodo v-on:add-todo="addTodo"/>
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    </div>
</template>

<script>
    import Todos from '../components/Todos';
    import AddTodo from '../components/AddTodo';
    export default {
        name: 'Home',
        components: {
            Todos,
            AddTodo
        },
        data() {
            return {
                todos: [
                    {
                        id: 1,
                        title: 'Kamer opruimen',
                        completed: false
                    }, {
                        id: 2,
                        title: 'Eten maken',
                        completed: false
                    }, {
                        id: 3,
                        title: 'Naar de winkel gaan',
                        completed: false
                    }, {
                        id: 4,
                        title: 'Corona overleven',
                        completed: false
                    }
                ],
                lastId: 0
            }
        },
        methods: {
            deleteTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            addTodo(newTodo) {
                this.lastId = this.todos[this.todos.length-1].id + 1;

                newTodo.id = this.lastId;
                this.todos.push(newTodo);
            }
        },
        created() {
            this.lastId = this.todos[this.todos.length-1].id;
           // You would fetch data here if you wanted to fetch it from an api
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
    }

    .btn {
        display: inline-block;
        border: none;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }

    .btn:hover {
        background: #666;
    }
</style>