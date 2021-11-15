import React from "react";
import { ICampaignCountInfo, ICampaign, ICampaignInfo } from "../types/index";

export const CampaignInfo = React.createContext<ICampaignInfo | null>(null);
export const CampaignCountInfo = React.createContext<ICampaignCountInfo | null>(
  null
);

const CampaignContext = React.createContext<ICampaign | null>(null);

export default CampaignContext;
