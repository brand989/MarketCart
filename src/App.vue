<template>
  <div>
    <header :class="[$style.header]">
     <div :class="[$style.logo]"> My shop </div>
      <div :class="[$style.cart]"><!-- <Cart /> -->Корзина</div>
    </header>
    <main>
      <h1>Товары</h1>
      <div>
      <GoodList :items="items"/>
      </div>
    </main>
  </div>
</template>

<script>

import GoodList from "./GoodList.vue";

export default {
  components: {
     GoodList 
  },

  data() {
    return {
      items: [
        { name: "Shirt", price: 150 },
        { name: "Socks", price: 15 },
        { name: "Jacket", price: 50 },
        { name: "Shoes", price: 1500 },
      ],
    };
  },
  methods: {},
};
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
