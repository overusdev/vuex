<template>
  <div class="api-output">

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const usersActions = [
  'fetchUsers',
];

const usersGetters = [
  'getAllUsers',
];

export default {
  name: "Api",
  data() {
    return {};
  },

  async mounted() {
    await this.fetchUsers();
  },
  computed: {
    ...mapGetters('users', usersGetters),
  },
  methods: {
    ...mapActions('users', usersActions),
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';

  .api-output {

    @include on-desktop {
      height: 450px;
      background: #000;
    }
  }
</style>
