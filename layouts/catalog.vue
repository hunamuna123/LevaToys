<template>
  <div class="min-h-screen flex flex-col max-w-[90rem] mx-auto">
    
    <HeaderNavbar />

    <main class="flex-1 w-full py-10 px-4 lg:px-6 lg:py-14 mx-auto">
      <slot />
    </main>

    <Footer />
    
  </div>
</template>
