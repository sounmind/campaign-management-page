import React, { createContext, useReducer } from "react";

import { Action, CampaignDispatch, IState } from "../types/index";
import getPaginations from "../utils";

import { ITEMS_PER_PAGE } from "../constants";

export const CampaignStateContext = createContext<IState | null>(null);
export const CampaignDispatchContext = createContext<CampaignDispatch | null>(
  null
);

const initialState: IState = {
  maxPageNumber: 1,
  currentPageNumber: 1,
  currentPaginations: [1],
  campaignInfo: {
    data: [],
  },
  campaignCountInfo: {
    data: {
      campaigns: {
        status: {
          ongoing: 0,
          completed: 0,
          registered: 0,
        },
      },
      influencers: {
        status: {
          selected: 0,
        },
      },
      reports: 0,
    },
  },
};

export const reducer = (state: IState, action: Action): IState => {
  const { currentPageNumber } = state;

  switch (action.type) {
    case "GO_NEXT_PAGE": {
      const { maxPageNumber } = state;
      const newPageNumber = currentPageNumber + 1;

      if (currentPageNumber === maxPageNumber) {
        return { ...state };
      }

      return {
        ...state,
        currentPageNumber: newPageNumber,
        currentPaginations: getPaginations(newPageNumber, maxPageNumber),
      };
    }

    case "GO_PREVIOUS_PAGE": {
      const { maxPageNumber } = state;
      const newPageNumber = currentPageNumber - 1;

      if (currentPageNumber === 1) {
        return { ...state };
      }

      return {
        ...state,
        currentPageNumber: newPageNumber,
        currentPaginations: getPaginations(newPageNumber, maxPageNumber),
      };
    }

    case "SET_PAGE": {
      return {
        ...state,
        currentPageNumber: action.payload,
      };
    }

    case "UPDATE_CAMPAIGN": {
      const { campaignInfo, campaignCountInfo } = action.payload;
      const maxPageNumber = Math.ceil(
        campaignInfo.data.length / ITEMS_PER_PAGE
      );

      return {
        ...state,
        maxPageNumber,
        currentPaginations: getPaginations(currentPageNumber, maxPageNumber),
        campaignInfo,
        campaignCountInfo,
      };
    }

    default: {
      throw new Error("Unhandled Action Dispatched.");
    }
  }
};

export const CampaignProvier = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CampaignStateContext.Provider value={state}>
      <CampaignDispatchContext.Provider value={dispatch}>
        {children}
      </CampaignDispatchContext.Provider>
    </CampaignStateContext.Provider>
  );
};
