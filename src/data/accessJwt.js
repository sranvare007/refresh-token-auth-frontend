import { atom } from "recoil";

export const AccessJwt = atom({
  key: "accessJwt", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
