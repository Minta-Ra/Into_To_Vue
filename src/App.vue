<template>
  <div id="app">
    <!-- Render on page -->
    <!-- 2 way binding, once variable changed, changes the state. No need to setState -->
    <h1>{{ greeting }}</h1>
    <button v-on:click="updateGreeting">Change Greeting</button>
    <ul>
      <!-- for each item -->
      <li v-for="(item, index) in items" :key="index">{{ item.name }}
        <span>{{ item.name }}</span>    
        <span v-if="item.isPurchased">Purchased!</span>  
      </li>
    </ul>
    <!-- OnSubmit it would refresh the page, use .prevent not to refresh -->
    <form v-on:submit.prevent="saveNewItem">
      <label for="new-item">Add a new Item:</label>
      <input type="text" id="new-item" v-model="newItem"/>
      <input type="submit" value="Submit New Item"/>
    </form>
  </div>
</template>

<script>

export default {
  name: 'App',
  // State, key : value pairs
  data() {
    return {
      greeting: "Hello World",
      // Another state
      items: [
        {name: "Milk", isPurchased: true},
        {name: "Cheese", isPurchased: false},
        {name: "Beans", isPurchased: true},
      ],
      // ["Milk", "Cheese", "Beans"],
      newItem: "",
    };
  },
  // Any methods that component will have
  methods: {
    updateGreeting: function(){
      this.greeting = "Changed!";
    },
    saveNewItem: function() {
      this.items.push({name: this.newItem, isPurchased: false});
      this.newItem="";
    }
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
