<template>
    <v-container>
        <v-layout row wrap justify-center>
            <v-flex xs12 lg8>
                <v-expansion-panel popout>
                    <v-expansion-panel-content class="pink darken-3 white--text" v-for="(rec, index) in recipes" :key="index">
                        <div class="title" slot="header">{{rec.name}}</div>
                        <v-card>
                            <v-card-text v-for="(ingred, inde) in rec.ingredients" :key="inde" class="border">
                                {{ingred}}
                            </v-card-text>
                            <v-layout justify-space-between>
                                <v-dialog v-model="showEditModal" max-width="600px">
                                    <v-btn @click="openEdit(rec.id)" slot="activator" class="ml-3" fab dark color="cyan">
                                        <v-icon dark>edit</v-icon>
                                    </v-btn>
                                    <v-card>
                                        <v-container>
                                            <v-layout wrap>
                                                <v-card-title class="headline text-xs-center">Edit recipe</v-card-title>
                                                <v-flex xs12>
                                                    <v-text-field v-model="editedRecipe.name" label="Name"></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-text-field v-model="editedRecipe.ingredients" label="Ingredients" hint="separated, by, commas"></v-text-field>
                                                </v-flex>
                                                <v-flex align-self-center>
                                                    <v-btn @click="showEditModal = false; 
                                                        editRecipe(editedRecipe)" class="pink darken-4" align-center fab dark>
                                                        <v-icon dark>edit</v-icon>
                                                    </v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card>
                                </v-dialog>
                                <v-btn @click="deleteRecipe(rec.id)" fab dark color="red">
                                    <v-icon dark>delete</v-icon>
                                </v-btn>
                            </v-layout>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>

        <!-- Add button + add-modal -->
        <v-dialog v-model="showAddModal" max-width="600px">
            <v-btn slot="activator" fab large dark color="indigo">
                <v-icon>add</v-icon>
            </v-btn>
            <v-card>
                <v-card-title class="headline">
                    <v-layout justify-center>
                        <span class="text-xs-center">Add Recipe</span>
                    </v-layout>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field v-model="name" label="Recipe name" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="ingredients" label="Ingredients" hint="separated, by, commas" required></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-card-actions>
                            <v-btn @click="showAddModal = false; 
                                addRecipe({name, ingredients});
                                name=null; ingredients = null" color="pink darken-4 white--text subheading">Add
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>

    </v-container>

</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      showAddModal: false,
      showEditModal: false,
      name: null,
      ingredients: null,
      editedRecipe: { name: "", ingredients: "", id: "" }
    };
  },

  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    }
  },

  methods: {
    ...mapMutations(["addRecipe", "deleteRecipe", "editRecipe"]),
    openEdit(id) {
      this.editedRecipe = { ...this.$store.getters.editedRecipe(id) };
      this.editedRecipe.ingredients = this.editedRecipe.ingredients.join();
    }
  }
};
</script>

<style scoped>
.border {
  border-bottom: 1px solid grey;
}
</style>

