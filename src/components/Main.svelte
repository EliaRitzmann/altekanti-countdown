<script>

</script>

<style>
  .cover {
      -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    }

     /* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 
</style>

<div class="relative bg-gradient-to-b lg:h-[140vh] text-white overflow-hidden ">
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

      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src="https://rb.gy/g1pwyx" alt="" class="cursor-pointer rounded" />
      </a>
    </div>
  </header>

  <main class="pl-4 lg:pl-16">
    
    <div
      class="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-center lg:pb-12"
    >
      <div class="absolute top-0 left-0 -z-10 w-screen bg-black h-full">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="cover.png" layout="fill" objectFit="cover" class="cover"/>
        
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
    <div class="h-40 space-y-0.5 md:space-y-2">
      <h2 class="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        Klassen
      </h2>
      <div class="group relative md:-ml-2">
        

        <div
          
        class="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 example"
        >
          <img src="bild1.png" alt="" class="h-44 w-80">
          <img src="bild1.png" alt="" class="h-44 w-80">
          <img src="bild1.png" alt="" class="h-44 w-80">
          <img src="bild1.png" alt="" class="h-44 w-80">
          <img src="bild1.png" alt="" class="h-44 w-80">
          <img src="bild1.png" alt="" class="h-44 w-80">
          <img src="bild1.png" alt="" class="h-44 w-80">
        </div>

        
      </div>
      <div class="h-40 space-y-0.5 md:space-y-2">
        <h2 class="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
          Klassen
        </h2>
        <div class="group relative md:-ml-2">
          
  
          <div
            
          class="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 example"
          >
            <img src="bild1.png" alt="" class="h-44 w-80">
            <img src="bild1.png" alt="" class="h-44 w-80">
            <img src="bild1.png" alt="" class="h-44 w-80">
            <img src="bild1.png" alt="" class="h-44 w-80">
            <img src="bild1.png" alt="" class="h-44 w-80">
            <img src="bild1.png" alt="" class="h-44 w-80">
            <img src="bild1.png" alt="" class="h-44 w-80">
          </div>
  
          
        </div>
        <div class="h-40 space-y-0.5 md:space-y-2">
          <h2 class="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
            Klassen
          </h2>
          <div class="group relative md:-ml-2">
            
    
            <div
              
            class="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 example"
            >
              <img src="bild1.png" alt="" class="h-44 w-80">
              <img src="bild1.png" alt="" class="h-44 w-80">
              <img src="bild1.png" alt="" class="h-44 w-80">
              <img src="bild1.png" alt="" class="h-44 w-80">
              <img src="bild1.png" alt="" class="h-44 w-80">
              <img src="bild1.png" alt="" class="h-44 w-80">
              <img src="bild1.png" alt="" class="h-44 w-80">
            </div>
    
            
          </div>
    </div>
    
  </main>
  <footer class="footer items-center p-4 absolute bottom-0">
    <div class="items-center grid-flow-col">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        src="logo.png"
        class="cursor-pointer object-contain h-16"
      />
      <p>Elia Ritzmann | I20A</p>
    </div> 
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a><h1>Insta: @jerome.shore</h1>
      </a> 
      
    </div>
  </footer>
</div>
