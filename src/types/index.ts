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
