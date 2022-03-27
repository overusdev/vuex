<template>
  <div class="users-output">
    <h2
        v-if="showTitle"
        >
        {{ usersTitle }}: {{ usersCount }}
    </h2>
    <div class="users-output__inner">
      <div
        v-for="item in users"
        :key="item.username"
        class="users-output__item"
      >
        <p class="users-output__text users-output__text--bold">{{ item.username }}</p>
        <p class="users-output__text">{{ item.email }}</p>
        <a
          :href="item.url"
          target="_blank"
          class="users-output__text users-output__text--link"
        >
          {{ item.url }}
        </a>

      </div>
    </div>
  </div>
</template>

<script>


export default {
    name: 'UsersList',
    props: {
        users: {
            type: Array,
            require: true,
            default: () => ([]),
        },
        usersCount: Number,
        usersTitle: String,
    },
    data: () => ({

    }),

    computed: {
        showTitle() {
            return this.usersTitle && this.usersCount;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';

  .users-output {
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