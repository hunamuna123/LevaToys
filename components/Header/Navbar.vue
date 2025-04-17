<template>
<nav class="bg-white">
  <div class=" w-full mx-auto md:flex hidden md:flex-row sm:justify-between md:items-center md:gap-x-3 py-3 px-4 md:px-6 lg:px-8 ">
    <div id="hs-nav-secondary" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div class="py-2 sm:py-0 flex flex-col sm:flex-row sm:justify-start gap-y-2 sm:gap-y-0 sm:gap-x-6">
        <a class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600" href="#">Компания</a>
        <a class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600" href="#">Доставка</a>
        <a class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600" href="#">Контакты</a>
        <a class="font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600" href="#">Полезные статьи</a>
      </div>
    </div>
  </div>
</nav>
<!-- End Nav -->
    <!-- ========== HEADER ========== -->
<header class="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
  <nav class="relative  w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center gap-x-1">
      <a class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">LevaToys</a>

      <!-- Collapse Button -->
      <button type="button" class="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" id="hs-header-base-collapse"  aria-expanded="false" aria-controls="hs-header-base" aria-label="Toggle navigation"  data-hs-collapse="#hs-header-base" >
        <svg class="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <svg class="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        <span class="sr-only">Toggle navigation</span>
      </button>
      <!-- End Collapse Button -->
    </div>

    <!-- Collapse -->
    <div id="hs-header-base" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "  aria-labelledby="hs-header-base-collapse" >
      <div class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div class="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
          <div class="grow">
            <div class="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                <div id="hs-nav-secondary" class="hs-collapse block md:hidden overflow-hidden transition-all duration-300 basis-full grow">
                    <div class="py-2 md:py-0 flex flex-col md:flex-row md:justify-end gap-y-2 md:gap-y-0 md:gap-x-6">
                        <a class="px-2 font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600" href="#">Компания</a>
                        <a class="px-2 font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600" href="#">Доставка</a>
                        <a class="px-2 font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600" href="#">Контакты</a>
                        <a class="px-2 font-medium text-sm text-gray-800 hover:text-teal-600 focus:outline-hidden focus:text-teal-600" href="#">Полезные статьи</a>
                    </div>
                </div>     
              
              <!-- Mega Menu -->
              <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                <button id="hs-header-base-mega-menu-fullwidth" type="button" class="hs-dropdown-toggle w-full p-2 flex items-center text-sm bg-teal-500 text-white hover:bg-teal-600 rounded-lg focus:outline-hidden focus:bg-teal-700" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                    <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/></svg>  Каталог
                  <svg class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </button>

                <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full min-w-60 hidden z-10 top-full start-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5" role="menu" aria-orientation="vertical" aria-labelledby="hs-header-base-mega-menu-fullwidth">
                  <div class="md:mx-6 lg:mx-8 md:bg-white md:rounded-lg md:shadow-md">
                    <!-- Grid -->
                    <div class="py-1 md:p-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div class="flex flex-col">
                        <!-- Link -->
                        <a class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg" href="#">
                          <svg class="shrink-0 size-4 mt-1 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">Support Docs</p>
                            <p class="text-sm text-gray-500">Explore advice and explanations for all of Preline's features.</p>
                          </div>
                        </a>
                        <!-- End Link -->

                        <!-- Link -->
                        <a class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg" href="#">
                          <svg class="shrink-0 size-4 mt-1 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">Integrations</p>
                            <p class="text-sm text-gray-500">Discover the huge range of tools that Preline integrates with.</p>
                          </div>
                        </a>
                        <!-- End Link -->

                        <!-- Link -->
                        <a class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg" href="#">
                          <svg class="shrink-0 size-4 mt-1 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">API Reference</p>
                            <p class="text-sm text-gray-500">Build custom integrations with our first-class API.</p>
                          </div>
                        </a>
                        <!-- End Link -->
                      </div>
                      <!-- End Col -->

                      <div class="flex flex-col">
                        <!-- Link -->
                        <a class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg" href="#">
                          <svg class="shrink-0 size-4 mt-1 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">Help Center</p>
                            <p class="text-sm text-gray-500">Learn how to install, set up, and use Preline.</p>
                          </div>
                        </a>
                        <!-- End Link -->

                        <!-- Link -->
                        <a class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg" href="#">
                          <svg class="shrink-0 size-4 mt-1 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">Developer Hub</p>
                            <p class="text-sm text-gray-500">Learn how to integrate or build on top of Preline.</p>
                          </div>
                        </a>
                        <!-- End Link -->

                        <!-- Link -->
                        <a class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 rounded-lg" href="#">
                          <svg class="shrink-0 size-4 mt-1 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">Community Forum</p>
                            <p class="text-sm text-gray-500">Learn, share, and connect with other Preline users.</p>
                          </div>
                        </a>
                        <!-- End Link -->
                      </div>
                      <!-- End Col -->

                      <div class="mt-2 md:mt-0 flex flex-col">
                        <span class="ms-2.5 mb-2 font-semibold text-xs uppercase text-gray-800">Customer stories</span>

                        <!-- Link -->
                        <a class="p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100" href="#">
                          <img class="size-32 rounded-lg" src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80" alt="Avatar">
                          <div class="grow">
                            <p class="text-sm text-gray-800">
                              Preline Projects has proved to be most efficient cloud based project tracking and bug tracking tool.
                            </p>
                            <p class="mt-3 inline-flex items-center gap-x-1 text-sm text-teal-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                              Learn more
                              <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </p>
                          </div>
                        </a>
                        <!-- End Link -->
                      </div>
                      <!-- End Col -->
                    </div>
                    <!-- End Grid -->
                  </div>
                </div>
              </div>
              <!-- End Mega Menu -->
              <HeaderSearch/>
            </div>
          </div>

          <div class="my-2 md:my-0 md:mx-2">
            <div class="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300"></div>
          </div>

          <!-- Button Group -->
          <div class=" flex flex-wrap items-center gap-x-1.5">
            <a class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg  bg-white text-gray-800 shadow-2xs hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span class="px-1">Войти</span> 
            </a>
            <a class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg   bg-white text-gray-800 shadow-2xs hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> <span class="px-1">Корзина</span>   </a>
          </div>
          <!-- End Button Group -->
        </div>
      </div>
    </div>
    <!-- End Collapse -->
  </nav>
</header>
<!-- ========== END HEADER ========== -->


</template>