import adapter from '@sveltejs/adapter-netlify';
import preprocessor from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
 
export default {
preprocess: preprocessor(),
preprocess: vitePreprocess(),
  kit: {
    // default options are shown
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,
 
      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
  }
};