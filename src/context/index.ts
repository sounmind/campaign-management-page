import React from "react";
import { ICampaign } from "../types";

const CampaignContext = React.createContext<ICampaign | null>(null);

export default CampaignContext;
