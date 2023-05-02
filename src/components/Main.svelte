<script>
  import { onMount } from "svelte";

  let days = "00";
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  const countdown = () => {
    const endDate = new Date("May 17, 2023 14:50:00").getTime();
    const now = new Date().getTime();
    const distance = endDate - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    seconds = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");
    console.log("hello" + seconds);
  };

  onMount(() => {
    countdown();
    setInterval(countdown, 1000);
  });
</script>

<div class="bg-gradient-to-b text-white overflow-hidden h-screen max-h-screen whitespace-nowrap">
  <header class="absolute w-full  flex justify-between">
    <div class="flex items-center space-x-2 md:space-x-10 p-2">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src="logo.png" class="cursor-pointer object-contain h-16" />

      <ul class="hidden space-x-4 md:flex">
        <li class="font-bold text-xl">Home</li>
        <li class="font-bold text-xl">TV Shows</li>
        <li class="font-bold text-xl">Movies</li>
        <li class="font-bold text-xl">New & Popular</li>
        <li class="font-bold text-xl">My List</li>
      </ul>
    </div>

    <div class="flex items-center space-x-4 text-sm font-light mr-10">
      <p class="hidden font-semibold text-xl lg:inline">Studenten</p>

      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src="https://rb.gy/g1pwyx" alt="" class="cursor-pointer rounded" />
      </a>
    </div>
  </header>

  <main class="pl-4 lg:pl-16">
    <div
      class="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-center lg:pb-12"
    >
      <div class="absolute top-0 left-0 max-h-screen h-screen overflow-hidden bg-black -z-10">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="cover.png" layout="fill" objectFit="cover" class="cover" />
      </div>

      <h1 class="text-2xl font-bold md:text-4xl lg:text-7xl">Abschluss 2023</h1>
      <p
        class="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl"
      >
        Thema: Filme und Serien (evt. Text)
      </p>

      <div class="flex space-x-3 hidden md:block">
        <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div
            class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-2xl lg:text-5xl">
              {days}
            </span>
            days
          </div>
          <div
            class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-2xl lg:text-5xl">
              {hours}
            </span>
            hours
          </div>
          <div
            class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-2xl lg:text-5xl">
              {minutes}
            </span>
            min
          </div>
          <div
            class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-2xl lg:text-5xl">
              {seconds}
            </span>
            sec
          </div>
        </div>
      </div>
    </div>

    <section class="md:space-y-24 " />
    <div class="flex justify-center mt-20 md:hidden">
      <div class="flex space-x-3 ">
        <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div
            class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-5xl">
              {days}
            </span>
            days
          </div>
          <div
            class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-5xl">
              {hours}
            </span>
            hours
          </div>
          <div
            class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-5xl">
              {minutes}
            </span>
            min
          </div>
          <div
            class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-5xl">
              {seconds}
            </span>
            sec
          </div>
        </div>
      </div>
    </div>

    <div class=" space-y-0.5 md:space-y-2 mt-8 lg:mt-0">
      <h2
        class="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl"
      >
        Klassen
      </h2>
      <div class="group relative md:-ml-2">
        <div
          class="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 example"
        >
          
          <img src="G19h.png" alt="" class="h-44 w-80 object-cover" />
          <img src="bild1.png" alt="" class="h-44 w-80" />
          <img src="bild1.png" alt="" class="h-44 w-80" />
          <img src="bild1.png" alt="" class="h-44 w-80" />
          <img src="bild1.png" alt="" class="h-44 w-80" />
          <img src="bild1.png" alt="" class="h-44 w-80" />
          <img src="bild1.png" alt="" class="h-44 w-80" />
        </div>
      </div>

      <div class=" space-y-0.5 md:space-y-2 mt-8 lg:mt-0 lg:hidden">
        <h2
          class="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl"
        >
          Klassen
        </h2>
        <div class="group relative md:-ml-2">
          <div
            class="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 example"
          >
            <img src="bild1.png" alt="" class="h-44 w-80" />
            <img src="bild1.png" alt="" class="h-44 w-80" />
            <img src="bild1.png" alt="" class="h-44 w-80" />
            <img src="bild1.png" alt="" class="h-44 w-80" />
            <img src="bild1.png" alt="" class="h-44 w-80" />
            <img src="bild1.png" alt="" class="h-44 w-80" />
            <img src="bild1.png" alt="" class="h-44 w-80" />
          </div>
        </div>
      </div>

      

      
    </div>
    <div class="flex justify-between mr-3 md:mr-16 mt-2">
      <a href="https://elia-ritzmann.ch/"><h1>Elia Ritzmann | I20A</h1></a>
      <a href="https://www.instagram.com/jerome.shore/"><h1 class="">@jerome.shore</h1></a>
    </div>
  </main>

  <!--
<footer class="footer items-center p-4 bg-black ">
    <div class="items-center grid-flow-col">
      
      <img src="logo.png" class="cursor-pointer object-contain h-16" />
      <p>Elia Ritzmann | I20A</p>
    </div>
    <div class=" hidden md:block grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      
      <a><h1>Insta: @jerome.shore</h1> </a>
    </div>
  </footer>

  -->
</div>

<style>
  .cover {
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .example::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .example {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
