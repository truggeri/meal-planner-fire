<script>
    export let displayName;
    export let photoURL;
    export let uid;
</script>

<div class="card-panel">
  <h3>Hi { displayName }!</h3>

  <img src={ photoURL } width="100" alt="user avatar">
  <p>Your userID is { uid }</p>
</div>