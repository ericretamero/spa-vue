<template>
  <div>
    <h1>You are on FirstPage</h1>
    <ul>
      <li v-for="(item, index) in list" :key=index>
            {{item}}
      </li>
    </ul>
    <button @click="onAddItem">Add item</button>
      <router-link to="/second">Go to SecondPage</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FirstPage",
  props: {
    msg: String
  },
  methods: {
    ...mapActions({
      modifyBookmark: "modify"
    }),
    onAddItem() {
      this.modifyBookmark(1);
    }
  },
  computed: {
    ...mapGetters({
      list: "bookmarks"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
