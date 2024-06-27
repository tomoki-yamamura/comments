import { createContext, useMemo, useState } from "react";
import { useFeedbackItms } from "../../lib/hooks";
import { TFeedbackItem } from "../../lib/types";

type TFeedbackItemsContext = {
  filteredFeedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectedCompany: (text: string) => void;
};

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null,
);

export default function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const {
    feedbackItems,
    isLoading,
    errorMessage,
    setFeedbackItems,
  } = useFeedbackItms();
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [feedbackItems, selectedCompany],
  );

  const handleSelectedCompany = (company: string) => {
    setSelectedCompany(company);
  };

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => array.indexOf(company) === index),
    [feedbackItems],
  );

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      company: companyName,
      text: text,
      daysAgo: 0,
    };
    setFeedbackItems((prev) => [...prev, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accrept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
  };



  return (
    <FeedbackItemsContext.Provider
      value={{
        filteredFeedbackItems,
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        handleSelectedCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
