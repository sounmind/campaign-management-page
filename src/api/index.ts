import { ICampaignCountInfo, ICampaignInfo } from "../types";

export const getCampaignInfo = async (): Promise<ICampaignInfo> => {
  const response = await fetch("/campaignInfo.json");

  return response.json();
};

export const getCampaignCountInfo = async (): Promise<ICampaignCountInfo> => {
  const response = await fetch("/campaignCountInfo.json");

  return response.json();
};
