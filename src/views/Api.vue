<template>
  <div class="api-output">
    <h2>Users count: {{ getAllUsersCount }}</h2>
    <div class="api-output__inner">
      <div
        v-for="item in getAllUsers"
        :key="item.username"
        class="api-output__item"
      >
        <p class="api-output__text api-output__text--bold">{{ item.username }}</p>
        <p class="api-output__text">{{ item.email }}</p>
        <a
          :href="item.url"
          target="_blank"
          class="api-output__text api-output__text--link"
        >
          {{ item.url }}
        </a>

      </div>
    </div>
  </div>
</template>

<script>
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
    background: #ccc;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include on-desktop {
      background: #fff;
    }

    &__inner {
      @include on-desktop {
        width: 340px;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 26px 20px;
      outline: 1px solid #ccc;
      margin-bottom: 12px;
    }

    &__text {

      &--bold {
        font-weight: bold;
      }

      &--link {
        display: inline-block;
      }
    }
  }
</style>
