<template>
  <div>
      <div>
      <Item
        v-for="(good, index) in  items "
        :key="index"
        :name="good.name"
        :price="good.price"
      />
      </div>
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
