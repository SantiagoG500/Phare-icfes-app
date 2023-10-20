<script>
  import { onAuthStateChanged } from 'firebase/auth';
  import { isLoggedIn, user } from '$lib/stores';
  import { Auth, Database } from '$lib/firebase';
  import { onMount } from 'svelte';

  // onMount(async () => {
  //   const currentUser = await Database.getDocument('usuarios', $user.uid);
  // });

  onAuthStateChanged(Auth.authInfo, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser;
  });
</script>

<header class="header">
  <nav class="nav-bar">
    <ul class="nav__ul">
      {#if $isLoggedIn}
        <li class="nav__li"><a class="link link--nav" href="/">Home</a></li>
        <li class="nav__li">
          <a class="link link--nav" href="/courses/">Inicia tu prueba</a>
        </li>
        <li class="nav__li">
          <a class="link link--nav" href="main-routes/account/">Perfil</a>
        </li>
        <li class="nav__li">
          <a class="link link--nav" href="results/">Resultados</a>
        </li>
        <li class="nav__li">
          <button href="/" on:click={Auth.logOut}>LogOut</button>
        </li>
      {:else}
        <li class="nav__li"><a class="link link--nav" href="/">Home</a></li>
        <li class="nav__li">
          <a class="link link--nav" href="main-routes/login/">Inicia sesión</a>
        </li>
      {/if}
    </ul>
  </nav>
</header>

<slot />

<footer class="footer">
  <h2 class="title">Phare</h2>

  <div class="footer__content">
    <section class="footer__section">
      <h2 class="footer__title title">Redes sociales</h2>
      <ul class="footer__ul">
        <li class="footer__li">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100087389373162"
            class="link">Facebook</a
          >
        </li>
        <li class="footer__li">
          <a
            target="_blank"
            href="https://www.instagram.com/phare.company/"
            class="link">Instagram</a
          >
        </li>
      </ul>
    </section>
  </div>

  <h2 class="title">Phare</h2>
  <p class="tiny-letter">Copyright &copy; 2023</p>
</footer>

<style>
  :global(*),
  :global(*)::after,
  :global(*)::before {
    box-sizing: border-box;
  }
  :global(:root) {
    --gray0: #f8f8f8;
    --gray1: #dbe1e8;
    --gray2: #b2becd;
    --gray3: #6c7983;
    --gray4: #454e56;
    --gray5: #2a2e35;
    --gray6: #12181b;

    --black-cyan: hsl(180, 100%, 30%);
    --correct-answer: hsl(110, 100%, 50%);
    --incorrect-answer: hsl(12, 100%, 50%);

    --font-light: 200;
    --font-regular: 400;
    --font-bold: 700;
  }
  :global(body) {
    margin: 0px;

    color: var(--gray2);
    background-color: var(--gray6);

    font-family: 'Poppins', -apple-system, sans-serif, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }
  :global(.link) {
    text-decoration: none;

    transition: color 1s ease;
    color: var(--text);
  }
  :global(.title),
  :global(.title--subtitle),
  :global(.link) {
    font-weight: var(font-bold);
  }
  :global(.title) {
    text-align: center;
  }
  :global(.title--subtitle) {
    font-size: 1.2rem;
  }
  :global(.btn) {
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 0.5em 1em;

    border: none;
    color: white;

    background-color: var(--gray3);
  }

  :global(.header--section) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    text-align: center;
  }
  :global(.section) {
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1.5rem;

    padding: 1rem;

    border-radius: 1rem;
    background-color: var(--gray5);
  }
  :global(.tiny-letter) {
    font-size: 0.8rem;
    margin: 0px;
  }
  /* global styles  */

  .header,
  .footer {
    width: 100%;
    background-color: var(--gray5);
  }
  .header {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .nav__ul,
  .footer__ul {
    display: flex;
    list-style: none;
  }
  .nav__ul {
    padding-left: 0px;
    margin: 0px;

    height: min-content;
    justify-content: space-evenly;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 3rem;
    padding: 1em;
  }
  .footer__ul {
    flex-direction: column;
    align-items: center;

    padding-left: 0px;
  }

  /* meadia queries */

  @media (hover: hover) {
    :global(.link):hover {
      color: var(--gray0);
    }
    :global(.btn):hover {
      background-color: var(--black-cyan);
    }
  }
  @media screen and (min-width: 900px) {
    .footer {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      align-items: flex-start;
    }
    .footer__section,
    .footer__ul {
      display: flex;
      flex-direction: row;
    }
    .footer__content {
      width: 100%;
      border-top: 1px solid var(--gray2);
      border-bottom: 1px solid var(--gray2);
    }
    /* .footer__ul::after,
		.footer__ul::before {
			display: block;
			content: '';
			width: 1;
			border-top: 1px solid var(--gray2);
		}
		 */

    .footer__li {
      margin-right: 1rem;
    }
    .footer__title {
      position: relative;
      margin-right: 2rem;
    }
    .footer__title::after {
      position: absolute;
      display: block;
      content: '';

      width: 2px;
      height: 50%;

      top: 25%;
      left: 106%;

      background-color: var(--gray2);
    }
  }
</style>
