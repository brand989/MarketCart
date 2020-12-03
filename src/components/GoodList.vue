<template>
  <div>
      <Item
        v-for="(good, index) in  items "
        :key="index"
        :id="good.id"
        :name="good.name"
        :price="good.price"
      />
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {

  components: {
    Item,
  },

  props: {
        items: Object,
        },

}
</script>

<style>
   
</style>
