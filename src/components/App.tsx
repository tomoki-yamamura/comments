import HashtagList from "./hashtags/HashtagList";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />

      <Container />

      <HashtagList />
    </div>
  );
}

export default App;