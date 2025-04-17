import { useRouter } from "vue-router";

// Preline UI
import("../node_modules/preline/dist");

export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.afterEach(async () => {
    setTimeout(() => window.HSStaticMethods.autoInit());
  });
});