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
    <button class="waves-effect waves-light btn" on:click={ () => auth.signOut() }>
      Logout<i class="material-icons right">exit_to_app</i>
    </button>
    <RecipeList uid={user.uid} />
{:else}
	<button class="waves-effect waves-light btn" on:click={login}>
		Signin with Google<i class="material-icons right">person</i>
	</button>
{/if}
</section>
