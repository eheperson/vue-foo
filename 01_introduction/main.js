var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
    // in console try this : 
    // app.message="enivicivokki"
  })
  

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
    // in console try this : 
    // app2.message = 'some new message'
  })
  

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
    // in console try this : 
    // app3.seen = false
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
    // in console try this : 
    // app4.todos.push({ text: 'New item' })
  })

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })
  
// In Vue, a component is essentially a Vue instance with pre-defined options. 
// Registering a component in Vue is straightforward:
// Define a new component called todo-item
Vue.component('todo-item', {
  // 'props' key allows us to pass data from the parent scope into the child components.
  //  Let’s modify the component definition to make it accept a prop:
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })

/*



*/