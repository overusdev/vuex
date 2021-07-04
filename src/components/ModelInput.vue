<template>
  <div class="model-input">
    <input 
        type="text" 
        class="model-input__field" 
        @input="$emit( 'input', $event.target.value )" 
    />
  </div>
</template>

<script>
export default {
    name: "ModelInput",
    model: {
        // директива v-model - настраеваемая
        prop: 'value',
        event: 'input'
    },
    data() {
        return {};
    },
    computed: {},
    methods: {},
};
</script>

<style lang="less" scoped>
.model-input {
}
</style>
