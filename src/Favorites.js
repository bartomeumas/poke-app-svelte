// import { writable } from "svelte/store";

// export let favs = new Set();

// function createStore() {
//   const { subscribe, set, update } = writable(favs);

//   return {
//     subscribe,
//     set,
//     update,
//     toggleFavorite: (/** @type {any} */ name) => {
//       if (favs.has(name)) {
//         favs.delete(name);
//       } else {
//         favs.add(name);
//       }

//       set(favs);
//     },
//   };
// }

// export const favorites = createStore();

import { writable } from "svelte/store";

export let favs = new Set();

function createStore() {
  const { subscribe, set, update } = writable(favs);

  return {
    subscribe,
    set,
    update,
    toggleFavorite: (/** @type {any} */ pokemon) => {
      if (favs.has(pokemon)) {
        favs.delete(pokemon);
      } else {
        favs.add(pokemon);
      }

      set(favs);
    },
  };
}

export const favorites = createStore();
