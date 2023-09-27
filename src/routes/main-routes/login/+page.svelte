<script>
  import { isLoggedIn, user } from '$lib/stores';
  import { Auth, Database, Users } from '$lib/firebase';
  import { goto } from '$app/navigation';

  const logIn = async () => {
    const userData = await Auth.logIn();
    const usuarios = await Database.getDocuments('usuarios');

    $user = userData.user;
    $isLoggedIn = true;

    const foundUser = usuarios.find(
      (usuarioActual) => usuarioActual.uid === userData.user.uid
    );

    if (foundUser)
      console.log(`Usuario "${$user.displayName}" está registrado`);
    else Users.addUser(userData.user);

    goto('/');
  };
</script>

<main class="section">
  {#if $isLoggedIn}
    <h1 class="title">Already lgged in</h1>
    <button><a href="/main-routes/account">Go to your profile</a></button>
    <!-- <button class="btn" on:click={logOut}>Cerrar sesión</button> -->
  {:else}
    <h1 class="title">Login</h1>
    <button class="btn" on:click={logIn}>Loggin with Google</button>

    <p class="disclaimer">Habilita las ventanas emergentes para esta página</p>
    <p class="disclaimer">Es necesario para el logeo con Google</p>
  {/if}
</main>

<style>
  .disclaimer {
    /* margin-top: 1.5rem; */
    font-size: 0.7rem;
  }
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
  }
</style>
