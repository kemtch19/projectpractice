<template>
  <div class="list">
    <h1>List Cards</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error
      architecto pariatur delectus facilis necessitatibus minima aliquam maxime
      omnis doloribus quia ut, repudiandae vitae eum veritatis excepturi quae
      quasi suscipit.
    </p>
  </div>
  <div class="grid-container">
    <div v-for="item in items" :key="item.id">
      <CardComponent :data="item" />
    </div>
  </div>
  <!-- Vamos a consumir la api -->
</template>

<script>
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "ListComponent",
  components: { CardComponent },
  data() {
    return {
      errorMessage: "",
      items: [],
    };
  },
  methods: {
    getData() {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          this.items = data.results;
        })
        .catch((error) => {
          console.log("error", error);
          this.errorMessage = error;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
body {
  background-color: #ebebeb;
  font-family: sans-serif;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 90%;
  margin: auto auto;
  padding: 10px;
}

.card {
  border: 1px solid black;
  padding: 10px;
  border-radius: 6px;
  background-color: white;
}
</style>