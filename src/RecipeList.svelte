<script>
    import Recipe from './Recipe.svelte';
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    const COLLECTION_NAME = 'recipes'

    // User ID passed from parent
    export let uid;

    // Form Text
    let title = '';
    let tags  = '';

    const query   = db.collection('recipes').where('uid', '==', uid).orderBy('created', 'desc');
    const recipes = collectionData(query, 'id').pipe(startWith([]));

    function add() {
      let newObject = {
        uid,
        title,
        created: Date.now(),
        tags: tags.split(' ')
      }
      db.collection(COLLECTION_NAME).add(newObject);
      title = '';
      tags  = '';
    }

    function removeItem(event) {
      const { id } = event.detail;
      db.collection(COLLECTION_NAME).doc(id).delete();
    }
</script>

{#each $recipes as recipe}
  <Recipe {...recipe} on:remove={removeItem} />
{/each}

<div class="card-panel">
  <h3>Add a new recipe</h3>

  <div class="input-field col s6">
    <input id="recipe_title" type="text" class="validate" bind:value={title}>
    <label for="recipe_title">Name</label>
  </div>

  <div class="input-field col s6">
    <input id="recipe_tags" type="text" class="validate" bind:value={tags}>
    <label for="recipe_tags">Tags</label>
  </div>

  <button class="waves-effect waves-light btn" on:click={add}>
    Add Recipe<i class="material-icons left">add_circle</i>
  </button>
</div>