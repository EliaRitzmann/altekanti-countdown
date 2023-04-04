<script>

</script>

<div class="relative h-screen bg-gradient-to-b lg:h-[140vh] text-white overflow-hidden max-h-screen">
  <header class="absolute w-screen flex justify-between ">
    <div class="flex items-center space-x-2 md:space-x-10">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="logo.png"
        class="cursor-pointer object-contain h-16"
      />

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

      <a href="/account">
        <img src="https://rb.gy/g1pwyx" alt="" class="cursor-pointer rounded" />
      </a>
    </div>
  </header>

  <main class="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
    <div
      class="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12"
    >
      <div class="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="cover.png" layout="fill" objectFit="cover" />
      </div>

      <h1 class="text-2xl font-bold md:text-4xl lg:text-7xl">Abschluss 2023</h1>
      <p
        class="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl"
      >
        overview
      </p>

      <div class="flex space-x-3">
        <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content">
              <span class="countdown font-mono text-5xl">
                <span style={{"--value":15}}></span>
              </span>
              days
            </div> 
            <div class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content">
              <span class="countdown font-mono text-5xl">
                <span style={{"--value":10}}></span>
              </span>
              hours
            </div> 
            <div class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content">
              <span class="countdown font-mono text-5xl">
                <span style={{"--value":24}}></span>
              </span>
              min
            </div> 
            <div class="flex flex-col p-2 bg-red-700 rounded-box text-neutral-content">
              <span class="countdown font-mono text-5xl">
                <span style={{"--value":53}}></span>
              </span>
              sec
            </div>
          </div>
          
      </div>
    </div>
    <section class="md:space-y-24" />
  </main>
</div>
