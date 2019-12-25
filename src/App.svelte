<script>
    import Profile from './Profile.svelte';
    import RecipeList from './RecipeList.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

Hi ya,

<section>
{#if user}
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    <RecipeList uid={user.uid} />
{:else}
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
</section>
