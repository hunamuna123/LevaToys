<template>
    <div class="max-w-[90rem] mx-auto ">
      <HeaderNavbar />
  
      <main
        class="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-[68px] lg:mt-[72px] min-h-[60vh]"
      >
        <slot />
      </main>
  
      <Footer />
    </div>
  </template>
  