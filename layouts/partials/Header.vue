<template>
  <header>
    <div class="bg-black text-white h-10 overflow-hidden">
      <div class="container mx-auto">
        <div class="flex mx-1">
          <div class="flex justify-center w-32">
            <a href="#"><img src="~/assets/images/logo/logo.PNG" alt="" class="h-10 w-32"></a>
          </div>
          <nav>
              <ul class="flex flex-wrap">
                <li class="w-12 nav_ul_li border-l sm:w-32 hover:border-red-700">
                 <a href="https://www.bbc.co.uk" class="text-sm font-semibold">
                    <svg class="w-6 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                    Sign In
                  </a>
                </li>
                <li class="nav_ul_li">
                  <a href="#" class="text-sm font-semibold">Home</a>
                </li>
                <li class="nav_ul_li">
                  <a href="#" class="text-sm font-semibold">News</a>
                </li>
                <li class="nav_ul_li">
                  <a href="#" class="text-sm font-semibold">Sport</a>
                </li>
                <li class="nav_ul_li">
                  <a href="#" class="text-sm font-semibold">Reel</a>
                </li>
                <li class="nav_ul_li">
                  <a href="#" class="text-sm font-semibold">Worklife</a>
                </li>
                <li class="nav_ul_li">
                  <a href="#" class="text-sm font-semibold">Travel</a>
                </li>
                <li class="nav_ul_li">
                  <a href="#" class="text-sm font-semibold">Future</a>
                </li>
                <li class="nav_ul_li">
                  <a href="#" class="text-sm font-semibold">Culture</a>
                </li>
              </ul>
          </nav>
          <div class="ml-2 whitespace-no-wrap  flex justify-between">
            <div class="pr-1 mr-1 sm:pr-8 border-r sm:mr-5">
              <div class="mt-2">
                <a class="text-sm font-semibold cursor-pointer" @click.prevent="showHideLowerbar()">More
                  <svg class="w-4 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            <form class="flex mt-2">
                <input type="search"  name="q" placeholder="Search" class="form-input header_search h-6 hidden sm:block"/>

                  <!-- <svg class="w-6 bg-yellow-800 h-6 px-1 hidden sm:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg> -->

                  <svg @click.prevent="showHideSearchBox()" class="sm:hidden w-6 bg-yellow-800 h-6 inline-block px-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto sm:hidden transition ease-in-out duration-500" v-if="searchBox">
      <div class="m-1">
        <form action="">
          <input type="search" class="form-input header_search h-8">
        </form>
      </div>
    </div>
    <div class="m-1  border border-gray-700 rounded-md sm:mx-0 transition duration-500 ease-in-out" v-if="lowerbar">
      <div class="container mx-auto">
        <div class="sm:flex items-center mx-2">
            <h2 class="md:w-2/12 text-4xl pr-5">MORE</h2>

            <ul class="w-10/12 flex justify-between items-center flex-wrap">
              <li class="xl:hidden lowerbar"><a href="">Culture</a></li>
              <li class="lg:hidden lowerbar"><a href="">Travel</a></li>
              <li class="lg:hidden lowerbar"><a href="">Future</a></li>
              <li class="lg:hidden lowerbar"><a href="">Worklife</a></li>
              <li class="md:hidden lowerbar"><a href="">Reel</a></li>
              <li class="sm:hidden lowerbar"><a href="">Sports</a></li>
              <li class="sm:hidden lowerbar"><a href="">News</a></li>

              <li class="lowerbar"><a href="">Music</a></li>
              <li class="lowerbar"><a href="">Tv</a></li>
              <li class="lowerbar"><a href="">Weather</a></li>
              <li class="lowerbar"><a href="">Sounds</a></li>
            </ul>
          </div>
      </div>
    </div>

  </header>
</template>
<script>
export default {
  data(){
    return{
      lowerbar: false,
      searchBox: false
    }
  },
  methods:{
    showHideLowerbar(){
      if(this.lowerbar == false){
        this.lowerbar = true;
      }else{
        this.lowerbar = false;
      }
    },
    showHideSearchBox(){
      // console.log('ok')
      if(this.searchBox == false){
        this.searchBox = true;
        console.log(this.searchBox)
      }else{
        this.searchBox = false;
      }
    }
  }

}
</script>

