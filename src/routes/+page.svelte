<script>
    import Intro from '../components/Intro.svelte'
    import Main from '../components/Main.svelte';
    import { onMount } from 'svelte';

let into = true;

onMount(() => {
  setTimeout(() => {
    into = false;
  }, 3000);
});

</script>

{#if into === true}
<Intro></Intro>
{:else}
<Main></Main>
{/if}
