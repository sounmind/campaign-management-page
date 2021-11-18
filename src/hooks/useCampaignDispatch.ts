import { useContext } from "react";
import { CampaignDispatchContext } from "../context";

export default () => {
  const dispatch = useContext(CampaignDispatchContext);

  if (!dispatch) {
    throw new Error("Cannot Find Campaign Dispatcher.");
  }

  return dispatch;
};
