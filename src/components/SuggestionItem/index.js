// Write your code here
import './index.css'

const PreviousItem = props => {
  const {details, suggestionButton} = props
  const {suggestion} = details

  const buttonClick = () => {
    suggestionButton(suggestion)
  }

  return (
    <li className="suggestion-list">
      <p className="suggestion-names">{suggestion}</p>
      <button type="button" className="button" onClick={buttonClick}>
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default PreviousItem
