<template>
  <UsersList
    :users="getAllUsers"
  />
</template>

<script>
import UsersList from '@/components/UsersList';
import { mapActions, mapGetters } from 'vuex';

const usersActions = [
  'fetchUsers',
];

const usersGetters = [
  'getAllUsers',
  'getAllUsersCount',
];

export default {
  name: "Api",
  data() {
    return {};
  },

  components: {
    UsersList,
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


</style>
