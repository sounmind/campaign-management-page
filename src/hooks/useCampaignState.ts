import { useContext } from "react";
import { CampaignStateContext } from "../context";

export default () => {
  const state = useContext(CampaignStateContext);

  if (!state) {
    throw new Error("Cannot Find Campaign State.");
  }

  return state;
};
