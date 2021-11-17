import { ICampaignCountInfo } from "../types/index";

const mockCampaignCountInfo: ICampaignCountInfo = {
  data: {
    campaigns: {
      status: {
        ongoing: 2,
        completed: 8,
        registered: 28,
      },
    },
    influencers: {
      status: {
        selected: 84,
      },
    },
    reports: 7,
  },
};

export default mockCampaignCountInfo;
