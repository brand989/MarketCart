<template>
  <div>
        <Button @myEvent="onCartClick">Корзина</Button>
        <div v-if="opened">
          <div v-if="!getItemsInCart.length">
            Список Пуст
          </div>  
          
          <div v-for="good in getItemsInCartForServer" :key="good">
              {{ good.name }} x {{ good.price }}
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
          'deleteInCart'
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
          'getItemsInCartForServer',
        ])
  } 
}
</script>

<style>

</style>