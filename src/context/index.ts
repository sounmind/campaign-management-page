import React from "react";
import { ICampaignCountInfo, ICampaignInfo } from "../types/index";

export const CampaignInfoContext = React.createContext<ICampaignInfo | null>(
  null
);
export const CampaignCountInfoContext =
  React.createContext<ICampaignCountInfo | null>(null);
