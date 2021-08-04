import create from "zustand";
import Filter from "../types/Filter";

type State = {
  filter: Filter | null;
  setFilter: (value: Filter | null) => void;
};

const eventsFromEmployeesFilterStore = create<State>((set) => ({
  filter: null,
  setFilter: (value) => set({ filter: value }),
}));

export default eventsFromEmployeesFilterStore;
