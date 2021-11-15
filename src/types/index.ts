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
    text: string;
  };
}

export interface ICampaignInfo {
  data: ICampaignDatum[];
}

export interface ICampaign {
  status: string;
  data?: {
    campaignInfo?: ICampaignInfo;
    campaignCountInfo?: ICampaignCountInfo;
  };
}
