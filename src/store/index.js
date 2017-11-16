import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let id = 2;

export const store = new Vuex.Store({
  state: {
    recipes: [
      {
        name: "Sufle",
        ingredients: ["cock", "corpse", "cheburashka"],
        id: 0
      },
      {
        name: "GotY",
        ingredients: ["wolfenstein", "doom", "prey"],
        id: 1
      }
    ]
  },

  mutations: {
    addRecipe(state, newRecipe) {
      state.recipes.push({
        name: newRecipe.name,
        ingredients: newRecipe.ingredients.split(",").filter(ingred => ingred),
        id: id
      });
      id++;
    },
    deleteRecipe(state, id) {
      let index = state.recipes.findIndex(rec => rec.id === id);
      state.recipes.splice(index, 1);
    },
    editRecipe(state, newRecipe) {
      let index = state.recipes.findIndex(rec => rec.id === newRecipe.id);
      newRecipe.ingredients = newRecipe.ingredients
        .split(",")
        .filter(ingred => ingred);
      state.recipes[index] = { ...newRecipe };
    }
  },
  getters: {
    editedRecipe: state => id => {
      return state.recipes.find(elem => elem.id === id);
    }
  }
});
