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

export interface ICampaignDatum {
  _id: string;
  title: string;
  reqruitCounts: number;
  type: {
    text: "instagram" | "blog";
  };
}

export interface ICampaignInfo {
  data: ICampaignDatum[];
}
