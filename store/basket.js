export const state = () => ({
  basket: []
});

export const mutations = {
  setBasket(store, item) {
    store.basket.push(item);
    console.log(store.basket);
    localStorage.basket = JSON.stringify(store.basket);
  },
  getBasket(store) {
    if (localStorage.getItem("basket")) {
      store.basket = JSON.parse(localStorage.getItem("basket"));
    }
  },
  updateBasket(store, item) {
    const i = store.basket.findIndex(prod => prod.title === item.title);
    store.basket[i].count = item.count;
    localStorage.basket = JSON.stringify(store.basket);
  },
  deleteBasket(store, item) {
    const i = store.basket.findIndex(prod => prod.title === item.title);
    store.basket.splice(i, 1);
    localStorage.basket = JSON.stringify(store.basket);
    console.log(store.basket);
  }
};

export const actions = {};
