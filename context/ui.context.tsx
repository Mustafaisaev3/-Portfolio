'use client'

import React, { PropsWithChildren } from "react";

export enum ModalViewTypes {
  WORK_VIEW = 'WORK_VIEW',
}

export interface State {
  displayModal: boolean;
  modalView: string;
  modalData: any;
}

const initialState = {
  displayModal: false,
  modalView: ModalViewTypes.WORK_VIEW,
  modalData: null,
};

type Action =
    {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "SET_MODAL_DATA";
      data: any;
    }

type MODAL_VIEWS =
  | "WORK_ITEM"



export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "SET_MODAL_DATA": {
      return {
        ...state,
        modalData: action.data,
      };
    }
  }
}

export const UIProvider: React.FC<PropsWithChildren> = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openModal = () => dispatch({ type: "OPEN_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });
  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: "SET_MODAL_VIEW", view });
  const setModalData = (data: any) =>
    dispatch({ type: "SET_MODAL_DATA", data });

  const value = React.useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
      setModalView,
      setModalData,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: React.FC<PropsWithChildren> = ({ children }) => (
    <UIProvider>{children}</UIProvider>
);