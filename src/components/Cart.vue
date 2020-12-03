<template>
  <div>
        <Button @myEvent="onCartClick">Корзина</Button>
        <div v-if="opened">
          <div v-if="!getItemsInCart.length">
            Список Пуст
          </div>  
          <div v-for="good in getItemsInCart" :key="good">
            {{ getData[good.id].name }} x {{ getData[good.id].price }} x {{ good.count }}
            <Button @myEvent="onDeletInCartClick(good.id)">-</Button>
          </div>
        </div> 
  </div>    
</template>

<script>
import Button from './Button.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
      Button,
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    ...mapActions('goods', [
          'deleteInCart',
        ]),

    onCartClick() {
      this.opened = !this.opened
    },

    onDeletInCartClick(good){
        this.deleteInCart(good)
    }


  },
    computed: {
      ...mapGetters('goods', [
          'getData',
          'getItemsInCart',

        ])
  } 
}
</script>

<style>

</style>