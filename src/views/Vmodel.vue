<template>
    <div class="model">
        <!-- <input 
            type="text"
            :value="innerValue"
            @input="innerValue = $event.target.value"
        />
        same as:
        <input type="text" class="model__input" v-model="innerValue" /> -->
        <ModelInput
            v-model="innerValue"
        />
        <p>{{ innerValue }}</p>
  </div>
</template>

<script>
import ModelInput from '../components/ModelInput';
export default {
    name: "Vmodel",
    data() {
        return {
            innerValue: '',
        };
    },
    components: {
        ModelInput,
    },
    computed: {},
    methods: {},
};
</script>

<style lang="less" scoped>
.model {
}
</style>
