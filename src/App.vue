<template>
  <div>
    <header :class="[$style.header]">
     <div :class="[$style.logo]"> My shop </div>
    <div :class="[$style.cart]">
         <Cart />
     
    </div>
      <div v-for="id in getItemsInCart" :key="id">  {{ id }} </div>
    </header>
    <main>
  
      <h1>Товары</h1>
      <Item 
        v-for="id in getItemsOnPage"
        :key="id"
        :id="id"
      />
      <div v-if="coounterPage < 4">
        <Button @myEvent="moreItems">Eще товары</Button>
      </div>
      
    </main>
  </div>
</template>

<script>

import Item from "./components/Item.vue"
import Cart from "./components/Cart.vue"
import { mapGetters, mapActions } from 'vuex'
import Button from './components/Button.vue'

export default {
  components: {
     Item, Cart, Button,
  },

  data() {
    return {
      items: [],
      coounterPage: 2
    };
  },
  methods: {
    ...mapActions('goods', [
      'requestData',
    ]),
    moreItems(){
      this.requestData(this.coounterPage)
      this.coounterPage++
    }
  },
  computed: {
      ...mapGetters('goods', [
          'getItemsOnPage',  
        ])
  },
  mounted() {
    this.requestData(1)
  } 
}
</script>

<style module>
    .header {
    min-height: 100px;
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .logo {
    color: white;
    padding: 30px;
    font-size: 40px;
    }

    .cart {
    color: white;
    font-weight: bold;
    padding: 15px;
    }

    main h1 {
    padding: 30px;
    }

</style>
