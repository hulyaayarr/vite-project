import { create } from "zustand";

interface UserState {
  firstName: string;
  lastName: string;
  birthDate?: Date;
  height?: number;
  weight?: number;
  setFirstName: (payload: string) => void;
  setLastName: (payload: string) => void;
  setHeight: (payload?: number) => void;
  setWeight: (payload?: number) => void;
  setBirthDate: (payload: Date) => void;
  getAge: () => number | undefined;
  getBmi: () => number;
  getBmiResult: () => "underweight" | "normal" | "overweight" | "obese";
}
const calculateBmiScore = (weight: number, height: number) =>
  weight / (height / 100) ** 2;
export const useUserStore = create<UserState>()((set, get) => ({
  firstName: "",
  lastName: "",
  setFirstName: (payload) => set({ firstName: payload }),
  setLastName: (payload) => set({ lastName: payload }),
  setBirthDate: (payload) => set({ birthDate: payload }),
  getAge: () => {
    const birthday = get().birthDate;
    if (!birthday) return;
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
  setHeight: (payload) => set({ height: payload }),
  setWeight: (payload) => set({ weight: payload }),
  getBmi: () => {
    const height = get().height;
    const weight = get().weight;

    if (!height || !weight) return 0;

    const score = +calculateBmiScore(weight, height);
    return score;
  },
  getBmiResult: () => {
    const bmi = get().getBmi();

    if (bmi < 18.5) return "underweight";
    if (bmi < 25) return "normal";
    if (bmi < 30) return "overweight";

    return "obese";
  },
}));
