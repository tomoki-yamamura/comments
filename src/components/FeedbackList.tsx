import { TriangleUpIcon } from "@radix-ui/react-icons"

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>

        <div>
          <p>B</p>
        </div>

        <div>
          <p>Tomoki</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid cupiditate iste vitae, ipsam dolorem libero cum debitis obcaecati! Commodi magni, architecto quod soluta laboriosam ea! Odit, accusantium. Dignissimos, ipsum?</p>
        </div>
      </li>
    </ol>
  )
}
