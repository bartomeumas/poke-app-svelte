import { writable } from "svelte/store";

let favs = new Set();

function createStore() {
  const { subscribe, set, update } = writable(favs);

  return {
    subscribe,
    set,
    update,
    toggleFavorite: (/** @type {any} */ name) => {
      if (favs.has(name)) {
        favs.delete(name);
      } else {
        favs.add(name);
      }

      set(favs);
      console.log(favs);
    },
  };
}

export const favorites = createStore();
