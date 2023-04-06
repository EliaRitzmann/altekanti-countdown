<script>
    import Intro from '../components/Intro.svelte'
    import Main from '../components/Main.svelte';
    import { onMount } from 'svelte';

let intro = true;

onMount(() => {
  setTimeout(() => {
    intro = false;
  }, 3100);
});

</script>

{#if intro === true}
<Intro></Intro>
{:else}
<Main></Main>
{/if}
