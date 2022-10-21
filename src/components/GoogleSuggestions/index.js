// Write your code here
import {Component} from 'react'

import './index.css'

import PreviousItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {content: ''}

  buttonClick = value => {
    this.setState({content: value})
  }

  onChangeSearchInput = event => {
    this.setState({
      content: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props

    const {content} = this.state

    const searchBarList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(content.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="content-container">
          <img
            className="google-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-input">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                value={content}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="previous-search-con">
              {searchBarList.map(each => (
                <PreviousItem
                  key={each.id}
                  details={each}
                  suggestionButton={this.buttonClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
