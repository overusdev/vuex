<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

const getters = ["allUsers"];
const actions = ["fetchUsers"];

export default {
  async mounted() {
    await this.fetchUsers();
  },
  computed: {
    ...mapGetters(getters),
  },
  methods: {
    ...mapActions(actions),
  },
};
</script>
