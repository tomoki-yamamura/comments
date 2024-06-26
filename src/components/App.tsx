import { useState, useEffect } from 'react'
import { TFeedbackItem } from '../lib/types'
import Container from './Container'
import Footer from './Footer'
import HashtagList from './HashtagList'

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleAddToList = (text: string) => {
    const companyName = text
      .split(" ")
      .find(word => word.includes("#"))!
      .substring(1)

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      companyName: companyName,
      text: text,
      daysAgo: 0,
    }
    setFeedbackItems(prev => [...prev, newItem])
  }

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        )

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setFeedbackItems(data.feedbacks)
      } catch (error) {
        setErrorMessage("Something went erong")
      }
      setIsLoading(false)
    }
    fetchFeedbackItems();
  }, [])

  return (
    <div className='app'>
      <Footer />
      <Container
        handleAddToList={handleAddToList}
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
      <HashtagList />
    </div>
  )
}

export default App
