<template>
  <Fragment>
    <div class="container mx-auto">
      <section class="hidden sm:flex justify-between mx-1 px-1 py-4 ">
        <div class="text-3xl pr-1">Welcome To BBC.com</div>
        <div class="text-3xl pl-1">Wednesday, 23 Decembor</div>
      </section>
      <!-- first section -->
      <section class="pb-8 mx-1 px-1">
        <div class="w-full">
          <ul class="grid  lg:grid-cols-4 grid-x-2 gap-x-5 gap-y-3">
            <li class="row-span-2 col-span-2 hover:shadow-md mouse_hover">
              <div class="relative">
                <div>
                    <img
                      src="https://ichef.bbc.co.uk/wwhp/144/cpsprodpb/CCC6/production/_116222425_mediaitem116222422.jpg"
                      alt="Donald Trump (file picture)" class="w-full"
                    />
                </div>

                <div class="absolute bottom-0 p-2 bg-gradient-to-t from-black to-transparent">
                  <h3 class="text-xl leading-5 sm:text-3xl sm:leading-10 text-white  font-semibold">
                    <a href="#">
                      Trump denounces 'wasteful' coronavirus aid bill
                    </a>
                  </h3>

                  <p class="hidden md:block short_description md:text-white">
                    He asks lawmakers to &quot;remove wasteful and unnecessary
                    items&quot;, adding the package &quot;really is a
                    disgrace&quot;.
                  </p>

                  <a  class="text-white country_location" href="#"  >US &amp; Canada</a>
                </div>
              </div>
            </li>
            <li class="hover:shadow-md mouse_hover" v-for="n in 4" :key="n.id">
              <div class="relative">
                <div>
                    <img
                      src="https://ichef.bbc.co.uk/wwhp/144/cpsprodpb/CCC6/production/_116222425_mediaitem116222422.jpg"
                      alt="Donald Trump (file picture)" class="w-full"
                    />
                </div>

                <div class="sm:absolute bottom-0 p-2 sm:bg-gradient-to-t from-black to-transparent">
                  <h3 class="text-base sm:text-xl sm:text-white leading-5 font-semibold">
                    <a href="#">
                      Trump denounces 'wasteful' coronavirus aid bill
                    </a>
                  </h3>
                  <a  class="sm:text-white country_location" href="#"  >US &amp; Canada</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- news section -->
      <section class="pb-8 mx-1 px-1">
        <h2 class="text-2xl border-l-4 border-red-700 leading-5 pl-2 font-bold mb-4">
          <a>News</a>
        </h2>
        <div class="module__content">
          <ul class="sm:flex gap-4">
            <li class="hover:shadow-md mouse_hover" v-for="n in 3" :key="n.id">
              <div>
                <div>
                  <img
                    src="https://ichef.bbc.co.uk/wwhp/144/cpsprodpb/CCC6/production/_116222425_mediaitem116222422.jpg"
                    alt="Lorries parked on M20" class="w-full"
                  />
                </div>
                <div class="pt-1 pb-4">
                  <h3 class="text-2xl font-semibold leading-7">
                    <a href="">
                      Stranded hauliers face 'a few days' at the border
                    </a>
                  </h3>
                  <p class="text-sm sm:text-lg short_description">
                    France has eased its travel ban but lorry drivers
                    need a negative Covid test to travel from the UK.
                  </p>
                  <a class="country_location">UK</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- Sports section -->
      <section class="pb-8 mx-1 px-1">
        <h2 class="text-2xl border-l-4 border-red-700 leading-5 pl-2 font-bold mb-4">
          <a>Sports</a>
        </h2>
        <div class="module__content">
          <ul class="sm:flex gap-4">
            <li class="hover:shadow-md mouse_hover" v-for="n in 3" :key="n.id">
              <div>
                <div>
                  <img
                    src="https://ichef.bbc.co.uk/wwhp/144/cpsprodpb/CCC6/production/_116222425_mediaitem116222422.jpg"
                    alt="Lorries parked on M20" class="w-full"
                  />
                </div>
                <div class="pt-1 pb-4">
                  <h3 class="text-2xl font-semibold leading-7">
                    <a href="#">
                      Stranded hauliers face 'a few days' at the border
                    </a>
                  </h3>
                  <p class="text-sm sm:text-lg short_description">
                    France has eased its travel ban but lorry drivers
                    need a negative Covid test to travel from the UK.
                  </p>
                  <a class="country_location">UK</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- weather -->
      <section class="pb-8 mx-1 px-1">
          <div class="mt-4">
            <div class="mb-4">
              <div class="flex items-center">
                <h2 class="text-2xl font-semibold mr-2">Singapore Weather</h2>
                <a class="bg-gray-200 rounded-md py-0.5 px-4" role="link" href="#" @click.prevent="showHideWeatherBox()">
                  <span v-if="!weatherBox">Edit</span>
                  <span v-else>Cancel</span>
                </a>
              </div>
              <div class="w-64 relative" v-if="weatherBox">
                <div class="m-1">
                  <form action="">
                    <input type="search" class="form-input header_search h-8">
                      <svg class="w-6 h-6 inline-block absolute right-0 p-1 mt-1 mr-1 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </form>
                </div>
              </div>
            </div>

            <div class="">
              <ul class="flex flex-wrap gap-8">
                <li class="" v-for="n in 4" :key="n.id">
                  <a href="#">
                    <div class="flex">
                      <div>
                        <img src="https://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/28.gif"
                          alt="Thundery Showers" class="w-full"
                        />
                      </div>
                      <div>
                        <h3 class="forecast--day">Wed</h3>
                        <p class="forecast--low">23&deg;C</p>
                      </div>
                    </div>
                  </a>
                  <!-- images for sunny day.dont delete -->
                  <!-- <img class="forecast--image"
                      src="https://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/29.gif"
                      alt="Thundery Showers"
                    />
                  <img
                    class="forecast--image"
                    src="https://static.bbci.co.uk/weather/0.5.284/images/icons/individual_56_icons/en_on_light_bg/10.gif"
                    alt="Light Rain Showers"
                  /> -->
                </li>
              </ul>
            </div>
          </div>
      </section>
    </div>
    <!-- Reel -->
    <section class="pb-8  bg-no-repeat bg-cover" style="background-image: url('https://ychef.files.bbci.co.uk/1200x675/p08h02kk.jpg')">
      <div class="container mx-auto py-10 " >
        <div class="mx-1 px-1">
          <a href="#">
            <div class="flex justify-between">
              <div class="reel--reellogo-container">
                <svg viewBox="0 0 52.7 15.8" class="w-32 text-white">
                  <path
                    d="M2.8,9.7v6H0V0h5.4c2,0,3.6,0.4,4.7,1.3c1.1,0.8,1.6,2,1.6,3.6c0,1-0.3,1.9-0.8,2.7c-0.5,0.7-1.3,1.3-2.3,1.7 c0.7,1.1,1.4,2.1,2.1,3.2c0.7,1.1,1.3,2.2,2,3.3H9.5c-0.6-1-1.2-2-1.8-3c-0.6-1-1.2-2-1.8-3c-0.2,0-0.4,0-0.6,0H2.8z M2.8,2.2v5.3 h2.5c1.2,0,2.1-0.2,2.8-0.6c0.6-0.4,0.9-1.1,0.9-2c0-0.9-0.3-1.6-0.9-2C7.4,2.4,6.5,2.2,5.3,2.2H2.8z"
                  />
                  <path
                    d="M14.9,0h10.6v2.4h-7.7v4.1h6.9v2.4h-6.9v4.6h8.2v2.4h-11V0z"
                  />
                  <path
                    d="M28.5,0H39v2.4h-7.7v4.1h6.9v2.4h-6.9v4.6h8.2v2.4h-11V0z"
                  />
                  <path d="M42.1,0h2.8v13.4h7.8v2.4H42.1V0z" />
                </svg>
              </div>
              <div class="flex rounded-full border border-white px-2 py-1">
                <div class="text-lg text-white">Visit Reel</div>
                <div class="reel--button-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#BBB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        <p class="my-4 text-2xl text-white mx-1 px-1">The most amazing videos from the BBC</p>
        <ul class="sm:flex gap-4 mx-1 px-1">
          <li class="hover:shadow-xl mb-2" v-for="n in 3" :key="n.id">
            <div class="bg-white">
              <a href="#">
                <div class="media__image">
                  <img
                    src="https://ychef.files.bbci.co.uk/432x243/p0929884.jpg"
                    alt="'The system is set up to manage our problems, not end them'" class="w-full"
                  />
                </div>
                <div class="text-xl font-bold p-2 pb-4">
                  <h3>
                    The system is set up to manage our problems, not end them
                  </h3>
                </div>
              </a>
            </div>
          </li>

        </ul>
      </div>
    </section>
    <!-- Asia News -->
    <section class="pb-8 bg-white mt-10">
      <div class="container mx-auto">
        <h2 class="text-2xl border-l-4 border-red-700 leading-5 pl-2 font-bold mb-4 mx-1 px-1">
            <a href="">Asia News</a>
        </h2>
        <div class="">
          <ul class="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-1 px-1">
            <li class="hover:shadow-xl" v-for="n in 4" :key="n.id">
              <div>
                <div>
                  <img
                    src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/115FB/production/_116236117_gettyimages-1251214419.jpg"
                    alt="Alibaba headquarters in Beijing" class="w-full"
                  />
                </div>
                <div class="pt-1 pb-4">
                  <h3 class="text-2xl font-semibold leading-7">
                    <a href="#">
                      Alibaba being investigated over monopoly tactics
                    </a>
                  </h3>

                  <p class="short_description">
                    The Chinese tech giant is face a probe by regulators into
                    locking merchants into its platform.
                  </p>

                  <a class="country_location">Bussiness</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- editors pic -->
    <section class="pb-8 bg-gray-100 mt-10 ">
      <div class="container mx-auto pt-4">
        <div class="mx-1 px-1">
          <h2 class="text-2xl border-l-4 border-red-700 leading-5 pl-2 font-bold mb-4 ">
            <span>Editor’s Picks</span>
          </h2>
          <div class="md:flex">
            <div class="w-full md:w-3/4 mr-2">
              <ul class="mb-5">
                <li class="w-full hover:shadow-xl">
                  <div class="relative">
                    <div>
                      <img
                        src="https://ychef.files.bbci.co.uk/width/790/p0808x91.jpg"
                        alt="From cocktails to karaoke, why more Japanese people are going it alone" class="w-full"
                      />
                    </div>
                    <div class="absolute bottom-0 p-2 bg-gradient-to-t from-black to-transparent">
                      <h3 class="text-lg leading-5 sm:text-3xl sm:leading-10 text-white  font-semibold">
                        <a href="#">
                          Trump denounces 'wasteful' coronavirus aid bill
                        </a>
                      </h3>

                      <p class="hidden md:block short_description md:text-white">
                        He asks lawmakers to &quot;remove wasteful and unnecessary
                        items&quot;, adding the package &quot;really is a
                        disgrace&quot;.
                      </p>

                      <a  class="text-white country_location" href="#"  >US &amp; Canada</a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-2">
                <li class="hover:shadow-xl" v-for="n in 6" :key="n.id">
                  <div>
                    <div>
                      <img
                        src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/115FB/production/_116236117_gettyimages-1251214419.jpg"
                        alt="Alibaba headquarters in Beijing" class="w-full"
                      />
                    </div>
                    <div class="pt-1 pb-4 p-2">
                      <h3 class="text-lg sm:text-2xl font-semibold leading-7">
                        <a href="#">
                          Alibaba being investigated over monopoly tactics
                        </a>
                      </h3>
                      <p class="text-sm sm:text-lg short_description">
                        The Chinese tech giant is face a probe by regulators into
                        locking merchants into its platform.
                      </p>
                      <a class="country_location">Bussiness</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4">
              <h2 class="text-xl bg-red-700 text-white p-2 ">Latest Business News</h2>
              <ul class="">
                <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="px-4 py-2 rounded-full bg-red-700 mr-2 italic text-white font-bold">1</span>
                      <h3 class="text-xl text-white">
                        Stock markets and pound rise on Brexit deal hopes
                      </h3>
                    </div>
                  </a>
                </li>
                <li class="bg-gray-800 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="px-4 py-2 rounded-full bg-red-700 mr-2 italic text-white font-bold">2</span>
                      <h3 class="text-xl text-white">
                        Stock markets and pound rise on Brexit deal hopes
                      </h3>
                    </div>
                  </a>
                </li>
                <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="px-4 py-2 rounded-full bg-red-700 mr-2 italic text-white font-bold">3</span>
                      <h3 class="text-xl text-white">
                        Stock markets and pound rise on Brexit deal hopes
                      </h3>
                    </div>
                  </a>
                </li>
                <li class="bg-gray-800 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="px-4 py-2 rounded-full bg-red-700 mr-2 italic text-white font-bold">4</span>
                      <h3 class="text-xl text-white">
                        Stock markets and pound rise on Brexit deal hopes
                      </h3>
                    </div>
                  </a>
                </li>
                <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="px-4 py-2 rounded-full bg-red-700 mr-2 italic text-white font-bold">5</span>
                      <h3 class="text-xl text-white">
                        Stock markets and pound rise on Brexit deal hopes
                      </h3>
                    </div>
                  </a>
                </li>
                <li class="bg-gray-800 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="px-4 py-2 rounded-full bg-red-700 mr-2 italic text-white font-bold">6</span>
                      <h3 class="text-xl text-white">
                        Stock markets and pound rise on Brexit deal hopes
                      </h3>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
     <!-- Future Planet -->
    <section class="pb-8  bg-no-repeat bg-cover" style="background-image: url('https://ychef.files.bbci.co.uk/976x549/p0836dcl.jpg')">
     <div class="bg-gradient-to-b from-black to-transparent">
        <div class="container mx-auto py-10 " >
        <div class="mx-1 px-1">
          <a href="#">
            <div class="flex justify-between items-center">
              <div class="reel--reellogo-container">
                <h3 class="text-white p-1 border-2 border-white text-lg sm:text-2xl font-bold">Future Planet</h3>
              </div>
              <div class="flex rounded-full border border-white px-2 py-1">
                <div class="text-base sm:text-lg text-white">Visit Future Planet</div>
                <div class="reel--button-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#BBB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        <p class="my-4 text-2xl text-white mx-1 px-1">Solution for a susstainable world</p>
        <ul class="sm:flex gap-4 mx-1 px-1">
          <li class="hover:shadow-xl mb-2" v-for="n in 3" :key="n.id">
            <div class="bg-white">
              <a href="#">
                <div class="media__image">
                  <img
                    src="https://ychef.files.bbci.co.uk/432x243/p0929884.jpg"
                    alt="'The system is set up to manage our problems, not end them'" class="w-full"
                  />
                </div>
                <div class="text-xl font-bold p-2 pb-4">
                  <h3>
                    The system is set up to manage our problems, not end them
                  </h3>
                </div>
              </a>
            </div>
          </li>

        </ul>
      </div>
     </div>
    </section>
    <!-- technology -->
    <section class="pb-8 bg-white mt-10">
      <div class="container mx-auto">
        <div class="">
          <ul class="grid grid-cols-2 gap-4 mx-1 px-1">
            <li class="hover:shadow-xl" v-for="n in 2" :key="n.id">
              <div>
                <h3 class="text-lg sm:text-2xl text-gray-700 uppercase mb-2 font-semibold">Technology of Bussiness</h3>
                <div>
                  <img
                    src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/115FB/production/_116236117_gettyimages-1251214419.jpg"
                    alt="Alibaba headquarters in Beijing" class="w-full"
                  />
                </div>
                <a class="country_location">Bussiness</a>
                <div class="pt-1 pb-4">
                  <h3 class="text-base leading-5 sm:text-2xl font-semibold sm:leading-7">
                    <a href="#">
                      Alibaba being investigated over monopoly tactics
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Featured Video -->
    <section class="pb-8 bg-gray-100 mt-10 ">
      <div class="container mx-auto pt-4">
        <div class="mx-1 px-1">
          <h2 class="text-2xl border-l-4 border-red-700 leading-5 pl-2 font-bold mb-4 ">
            <span>Featured Video</span>
          </h2>
          <div class="md:flex">
            <div class="w-full">
              <div class="relative">
                <ul class="mb-5">
                  <li class="w-full hover:shadow-xl">
                    <div class="relative">
                      <div>
                        <img
                          src="https://ychef.files.bbci.co.uk/width/790/p0808x91.jpg"
                          alt="From cocktails to karaoke, why more Japanese people are going it alone" class="w-full"
                        />
                      </div>
                      <div class="absolute bottom-0 p-2 bg-gradient-to-t from-black to-transparent">
                        <h3 class="text-xl leading-5 sm:text-3xl sm:leading-10 text-white  font-semibold">
                          <a href="#">
                            Trump denounces 'wasteful' coronavirus aid bill
                          </a>
                        </h3>

                        <p class="hidden md:block short_description md:text-white">
                          He asks lawmakers to &quot;remove wasteful and unnecessary
                          items&quot;, adding the package &quot;really is a
                          disgrace&quot;.
                        </p>

                        <a  class="text-white country_location" href="#"  >US &amp; Canada</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="absolute top-0">
                  <a href="">
                    <svg class="w-10 bg-black p-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </a>

                </div>
              </div>

              <ul class="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-2">
                <li class="hover:shadow-xl" v-for="n in 6" :key="n.id">
                  <div>
                    <div>
                      <img
                        src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/115FB/production/_116236117_gettyimages-1251214419.jpg"
                        alt="Alibaba headquarters in Beijing" class="w-full"
                      />
                    </div>
                    <div class="pt-1 pb-4 p-2">
                      <h3 class="text-lg leading-5 sm:text-2xl font-semibold sm:leading-7">
                        <a href="#">
                          Alibaba being investigated over monopoly tactics
                        </a>
                      </h3>
                      <p class="text-sm sm:text-lg short_description">
                        The Chinese tech giant is face a probe by regulators into
                        locking merchants into its platform.
                      </p>
                      <a class="country_location">Bussiness</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- on air -->
    <section class="p4 bg-white my-5">
      <div class="container mx-auto">
        <div class="flex items-center bg-black">
            <div class="text-sm sm:text-lg font-semibold text-white bg-red-700 p-2">
              BBC WORLD SERVICE
            </div>
            <div class="text-sm sm:text-lg font-semibold text-white bg-black p-2">
              <svg class="w-6 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
              </svg>ON AIR : The Food Chain
            </div>
        </div>
      </div>
    </section>
     <!-- More around the BBC -->
    <section class="pb-8 bg-gray-100 mt-10 ">
      <div class="container mx-auto pt-4">
        <div class="mx-1 px-1">
          <h2 class="text-2xl border-l-4 border-red-700 leading-5 pl-2 font-bold mb-4 ">
            <span>More Around The BBC</span>
          </h2>
          <div class="md:flex">
            <div class="w-full md:w-4/12 mr-2 mb-4">
              <h2 class="text-xl bg-red-700 text-white p-2 ">Correspondents</h2>
              <ul class="">
                <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="rounded-full overflow-hidden mr-2"><img src="https://ichef.bbc.co.uk/wwhp/144/ibroadcast/images/live/p0/3q/bb/p03qbbkl.jpg" alt="correspondents"></span>
                      <div>
                        <h3 class="text-xl text-white">
                          Stock markets and pound rise on Brexit deal hopes
                        </h3>
                        <p class="text-base italic text-white">By John Amos</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="rounded-full overflow-hidden mr-2"><img src="https://ichef.bbc.co.uk/wwhp/144/ibroadcast/images/live/p0/3q/bb/p03qbbkl.jpg" alt="correspondents"></span>
                      <div>
                        <h3 class="text-xl text-white">
                          Stock markets and pound rise on Brexit deal hopes
                        </h3>
                        <p class="text-base italic text-white">By John Amos</p>
                      </div>
                    </div>
                  </a>
                </li>
                 <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="rounded-full overflow-hidden mr-2"><img src="https://ichef.bbc.co.uk/wwhp/144/ibroadcast/images/live/p0/3q/bb/p03qbbkl.jpg" alt="correspondents"></span>
                      <div>
                        <h3 class="sm:text-xl text-white">
                          Stock markets and pound rise on Brexit deal hopes
                        </h3>
                        <p class="text-base italic text-white">By John Amos</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="rounded-full overflow-hidden mr-2"><img src="https://ichef.bbc.co.uk/wwhp/144/ibroadcast/images/live/p0/3q/bb/p03qbbkl.jpg" alt="correspondents"></span>
                      <div>
                        <h3 class="text-xl text-white">
                          Stock markets and pound rise on Brexit deal hopes
                        </h3>
                        <p class="text-base italic text-white">By John Amos</p>
                      </div>
                    </div>
                  </a>
                </li>
                 <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="rounded-full overflow-hidden mr-2"><img src="https://ichef.bbc.co.uk/wwhp/144/ibroadcast/images/live/p0/3q/bb/p03qbbkl.jpg" alt="correspondents"></span>
                      <div>
                        <h3 class="text-xl text-white">
                          Stock markets and pound rise on Brexit deal hopes
                        </h3>
                        <p class="text-base italic text-white">By John Amos</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="bg-gray-900 p-4">
                  <a href="#">
                    <div class="flex items-center">
                      <span class="rounded-full overflow-hidden mr-2"><img src="https://ichef.bbc.co.uk/wwhp/144/ibroadcast/images/live/p0/3q/bb/p03qbbkl.jpg" alt="correspondents"></span>
                      <div>
                        <h3 class="text-xl text-white">
                          Stock markets and pound rise on Brexit deal hopes
                        </h3>
                        <p class="text-base italic text-white">By John Amos</p>
                      </div>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
            <div class="w-full md:w-8/12 ">
              <ul class="mb-5">
                <li class="w-full hover:shadow-xl">
                  <div class="relative">
                    <div>
                      <img
                        src="https://ychef.files.bbci.co.uk/width/790/p0808x91.jpg"
                        alt="From cocktails to karaoke, why more Japanese people are going it alone" class="w-full"
                      />
                    </div>
                    <div class="absolute bottom-0 p-2 bg-gradient-to-t from-black to-transparent">
                      <h3 class="text-xl leading-5 sm:text-3xl sm:leading-10 text-white  font-semibold">
                        <a href="#">
                          Trump denounces 'wasteful' coronavirus aid bill
                        </a>
                      </h3>

                      <p class="hidden md:block short_description md:text-white">
                        He asks lawmakers to &quot;remove wasteful and unnecessary
                        items&quot;, adding the package &quot;really is a
                        disgrace&quot;.
                      </p>

                      <a  class="text-white country_location" href="#"  >US &amp; Canada</a>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-2">
                <li class="hover:shadow-xl" v-for="n in 6" :key="n.id">
                  <div>
                    <div>
                      <img
                        src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/115FB/production/_116236117_gettyimages-1251214419.jpg"
                        alt="Alibaba headquarters in Beijing" class="w-full"
                      />
                    </div>
                    <div class="pt-1 pb-4 p-2">
                      <h3 class="text-lg leading-5 sm:text-2xl font-semibold sm:leading-7">
                        <a href="#">
                          Alibaba being investigated over monopoly tactics
                        </a>
                      </h3>
                      <p class="text-sm sm:text-lg short_description">
                        The Chinese tech giant is face a probe by regulators into
                        locking merchants into its platform.
                      </p>
                      <a class="country_location">Bussiness</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- Woomen -->
    <section class="pb-8 bg-white mt-10">
      <div class="container mx-auto">
        <div class="">
          <ul class="grid grid-cols-2 gap-4 mx-1 px-1">
            <li class="hover:shadow-xl" v-for="n in 2" :key="n.id">
              <div>
                <h3 class="text-2xl text-gray-700 uppercase mb-2 font-semibold">Woomen</h3>
                <div>
                  <img
                    src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/115FB/production/_116236117_gettyimages-1251214419.jpg"
                    alt="Alibaba headquarters in Beijing" class="w-full"
                  />
                </div>
                <a class="country_location">Bussiness</a>
                <div class="pt-1 pb-4">
                  <h3 class="text-lg leading-5 sm:text-2xl font-semibold sm:leading-7">
                    <a href="#">
                      Alibaba being investigated over monopoly tactics
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- World in picture -->
    <section class="pb-8 bg-gray-100 mt-10 ">
      <div class="container mx-auto pt-4">
        <div class="mx-1 px-1">
          <h2 class="text-2xl border-l-4 border-red-700 leading-5 pl-2 font-bold mb-4 ">
            <span>World in picture</span>
          </h2>
          <div class="md:flex">
            <div class="w-full">
              <ul class="mb-5 sm:flex gap-4">
                <li class="w-full hover:shadow-xl mb-2" v-for="n in 2" :key="n.id">
                  <div class="relative">
                    <div>
                      <img
                        src="https://ychef.files.bbci.co.uk/width/790/p0808x91.jpg"
                        alt="From cocktails to karaoke, why more Japanese people are going it alone" class="w-full"
                      />
                    </div>
                    <div class="absolute bottom-0 p-2 bg-gradient-to-t from-black to-transparent">
                      <h3 class="text-xl leading-5 sm:text-3xl sm:leading-10 text-white  font-semibold">
                        <a href="#">
                          Trump denounces 'wasteful' coronavirus
                        </a>
                      </h3>
                      <a  class="text-white country_location" href="#"  >US &amp; Canada</a>
                    </div>
                    <div class="absolute top-0">
                      <svg class="w-10 bg-black p-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </li>

              </ul>
              <ul class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <li class="hover:shadow-xl bg-white" v-for="n in 3" :key="n.id">
                  <div class="relative">
                    <div>
                      <img
                        src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/123ED/production/_116133747_teacake.jpg"
                        alt="Alibaba headquarters in Beijing" class="w-full"
                      />
                    </div>
                    <div class="pt-1 pb-4 p-2">
                      <h3 class="text-lg leading-5 sm:text-2xl font-semibold sm:leading-7">
                        <a href="#">
                          Alibaba being investigated over monopoly tactics
                        </a>
                      </h3>
                      <a href="#" class="country_location">Glassow And West Sctoland</a>
                    </div>
                    <div class="absolute top-0">
                      <svg class="w-10 bg-black p-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>






<div class="container-fluid">
    <carousel
      class="home-slider"
      :per-page="8"
      :autoplay="true"
      :autoplayTimeout="5000"
      :loop="true"
      :navigationEnabled="true"
    >
      <slide v-for="n in 5" :key="n.id">
        <div class="mx-1">
          <img
            class="img-responsive"
            src="https://picsum.photos/600/300"
            alt="Awesome Image"
          />
        </div>
      </slide>
    </carousel>
  </div>







    <footer class="bg-customcolor-200 mt-10">
      <div class="container mx-auto text-white">
        <div class="mx-1 px-1">
          <div class="text-xl font-semibold pt-2">Explore the BBC</div>
          <div class="pb-2">
            <ul class="grid grid-cols-6 justify-center mb-5 border-b border-white pb-2">
              <li class="orb-footer-terms border-r border-white mx-1" v-for="n in 6" :key="n.id">
                <a class="block mr-2" href="https://www.bbc.co.uk/usingthebbc/terms/">Terms</a><br>
                <a class="block mr-2" href="https://www.bbc.co.uk/usingthebbc/terms/">Terms</a>
              </li>
            </ul>
            <div class="text-xs text-center mb-2">
                Copyright &copy; 2020 BBC. The BBC is not responsible for the content of external sites.
              <span class="text-xs">
                <a href="https://www.bbc.co.uk/help/web/links/" class="orb-hilight">
                    Read about our approach to external linking.
                </a>
              </span >
            </div>
          </div>
        </div>
      </div>
    </footer>

  </Fragment>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import Fragment from "render-fragment";
export default {
  data() {
    return {
      weatherBox: false
    };
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    showHideWeatherBox() {
      if (this.weatherBox == false) {
        this.weatherBox = true;
      } else {
        this.weatherBox = false;
      }
    }
  }
};
</script>






