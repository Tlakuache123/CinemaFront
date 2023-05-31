import { create } from "zustand";

const usePelisStore = create((set) => ({
  actor_id: "",
  director_id: "",
  estudio_id: "",
  cancion_id: " ",
  set_actor_id: (id) => set(() => ({ actor_id: id })),
  set_director_id: (id) => set(() => ({ director_id: id })),
  set_estudio_id: (id) => set(() => ({ estudio_id: id })),
  set_cancion_id: (id) => set(() => ({ cancion_id: id })),
}));

export { usePelisStore };
