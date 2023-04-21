<script>
let id = 0
export default {
  // component options
  // declare some reactive state here
  data() {
    return {
      message: 'Hello world!', // for 
      counter: {
        count: 0
      },
      titleClass: 'title',
      text: '',
      awesome: true,

      // for Lesson 7
      todos: [
        { id: id++, text: 'Learn HTML', done: true },
        { id: id++, text: 'Learn JavaScript', done: true },
        { id: id++, text: 'Learn Vue', done: false },
      ],
      newTodo: '',
      hideCompleted: false,
    }
  },

  methods: {
    increment() {
      // update component state
      this.counter.count++
    },

    onInput(e) {
      this.text = e.target.value
    },

    toggle() {
      this.awesome = !this.awesome
    },

    // for Lesson 7
    addTodo() {
      this.todos.push({
        id: id++,
        text: this.newTodo,
        done: false
      })
      this.newTodo = ''
    },

    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
      // this.todos = this.todos.filter((t) => t !== todo)
    },
  },

  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter((t) => !t.done) : this.todos
    }
  },

  mounted() {
    this.$refs.p.textContent = 'Updated the text content using refs'
  },

}
</script>

<template>
  <h1>{{ message }}</h1>
  <h1>{{ message.split('').reverse().join('') }}</h1>
  <p>{{ counter.count }}</p>

  <!-- Lesson3: Start binding titleClass -->
  <h1 v-bind:class="titleClass">Make me red</h1>
  <h1 :class="titleClass">Make me red</h1>
<!-- End binding titleClass -->

  <!-- Lesson4: Start Event Handler -->
  <button v-on:click="increment"> Press me </button>
  <button @click="increment"> Press me </button>
  <p>{{ this.counter.count }}</p>
  <!-- End Event Handler -->

  <!-- Lesson5: Start Form bindings (2 way binding)-->
  <input v-bind:value="text" v-on:input="onInput">
  <input :value="text" @input="onInput">
  <!-- v-model automatically syncs the <input>'s value with the bound state, so we no longer need to use an event handler for that. -->
  <input v-model="text">
  <p>{{ this.text }}</p>

  <!-- End Form bindings (2 way binding)-->

  <!-- Lesson6: Start Conditional Rendering -->
  <button @click="toggle">Toogle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh, no, oops </h1>
  <!-- End Conditional Rendering -->

  <!-- Lesson7: Start List Rendering -->
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add To do</button>

  </form>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>

  <ul>
    <template v-for="todo in todos" :key="todo.id">
      <li v-if="!todo.done">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }"> {{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </template>
  </ul>

  <!-- Lesson 8: Start Computed option -->
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }"> {{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>

  <!-- A computed property tracks other reactive state used in its computation as dependencies.  hideCompleted
                         It caches the result and automatically updates it when its dependencies change. -->
  <!-- End Computed option -->

  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show All' : 'Hide completed' }}
  </button>

  <!-- End List Redering -->

  <!-- Start Lesson 9: Lifecycle and template refs -->
  <!-- Using refs update the DOM manually. The element will be exposed on this.$refs as this.$refs.p.
                 However, you can only access it after the component is mounted.-->
  <p ref="p">Hello</p>

  <!-- End Lesson 9: Lifecycle and template refs -->
</template>

<style scoped>
.title {
  color: red;
}

.done {
  text-decoration: line-through;
}
</style>
