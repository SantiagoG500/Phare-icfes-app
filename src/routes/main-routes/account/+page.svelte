<script>
  import { user, isLoggedIn } from '$lib/stores';
  // console.log($user);

  const { displayName, photoURL, uid, email } = $user;
</script>

{#if $isLoggedIn}
  <main class="section section--profile">
    <h1>Profile</h1>

    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="user-photo" src={photoURL} alt="user photo" />
    <p><b>Name: </b> {displayName}</p>
    <p><b>Email: </b> {email}</p>

    <!-- <div class="profile-info">
    </div> -->
  </main>
{:else}
  <main class="section section--profile">
    <h1>Not logged in</h1>
  </main>
{/if}

<style>
  .section--profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  /* .profile-info {
    flex-direction: column;
    align-items: flex-start;
  } */
  .user-photo {
    border-radius: 1rem;
    overflow: hidden;
  }
</style>
