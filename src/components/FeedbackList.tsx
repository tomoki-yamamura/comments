import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </ol>
  )
}
