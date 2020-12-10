<template>
  <button @click="onBtnClick"><slot></slot></button>
  
</template>

<script>
export default {
   
    methods: {
        onBtnClick() {
          this.$emit('myEvent')
        }
    }
}
</script>

<style>

</style>