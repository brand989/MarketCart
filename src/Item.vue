<template>
  <div> {{ name }} - {{ price }} руб. </div>
</template>

<script>
export default {
    props: {
        name: String,
        price: Number,
        }
}
</script>

<style>

</style>