<template>
<div>
  <div> {{ currentItem.name }} </div>
  <div>  {{ currentItem.price }} </div>
  <Button @myEvent="onBuyClick">Купить</Button>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Button from './Button.vue'

export default {
    components: {
      Button,
    },
    props: {
        id: String,
    },
    computed: {
      ...mapGetters('goods', [
          'getData',
        ]),

      currentItem() {
          return this.getData[this.id] || {}
        }
    },
    methods: {
      ...mapActions('goods', [
          'addInCart',
        ]),
      onBuyClick() {
        this.addInCart(this.id)
      }
    }  
}
</script>

<style>

</style>