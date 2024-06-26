import FeedbackItemsContextProvider from "./context/FeedbackItemsContextProvider";
import HashtagList from "./hashtags/HashtagList";
import Container from "./layout/Container";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="app">
      <Footer />

      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
