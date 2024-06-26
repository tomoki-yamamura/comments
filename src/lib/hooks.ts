import { useContext } from "react";
import { FeedbackItemsContext } from "../components/context/FeedbackItemsContextProvider";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not defined in FeedbackList component",
    );
  }
  return context;
}
