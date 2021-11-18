import { Dispatch } from "react";

export interface ICampaignCountInfo {
  data: {
    campaigns: {
      status: {
        ongoing: number;
        completed: number;
        registered: number;
      };
    };
    influencers: {
      status: {
        selected: number;
      };
    };
    reports: number;
  };
}

export type CampaignMediaType = "instagram" | "blog";

export interface ICampaignDatum {
  _id: string;
  title: string;
  reqruitCounts: number;
  type: {
    text: CampaignMediaType;
  };
}

export interface ICampaignInfo {
  data: ICampaignDatum[];
}

export interface IState {
  maxPageNumber: number;
  currentPageNumber: number;
  currentPaginations: number[];
  campaignInfo: ICampaignInfo;
  campaignCountInfo: ICampaignCountInfo;
}

export type Action =
  | { type: "SET_PAGE"; payload: number }
  | { type: "GO_PREVIOUS_PAGE" }
  | { type: "GO_NEXT_PAGE" }
  | {
      type: "UPDATE_CAMPAIGN";
      payload: {
        campaignInfo: ICampaignInfo;
        campaignCountInfo: ICampaignCountInfo;
      };
    };

export type CampaignDispatch = Dispatch<Action>;
