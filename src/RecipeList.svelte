<script>
    import Recipe from './Recipe.svelte';
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    const COLLECTION_NAME = 'recipes'

    // User ID passed from parent
    export let uid;

    // Form Text
    let title = 'New Recipe';
    let tags  = 'tags';

    const query   = db.collection('recipes').where('uid', '==', uid);
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

<ul>
	{#each $recipes as recipe}
    <Recipe {...recipe} on:remove={removeItem} />
	{/each}
</ul>

<input bind:value={title}>
<input bind:value={tags}>
<button on:click={add}>Add Recipe</button>