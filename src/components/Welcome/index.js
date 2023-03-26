import {Component} from './react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onSunscribe = () => {
      this.setState((prevState) => ({isSubscribe = true}))
  }
  onSubscribed = () => {
      this.setState((prevState) => ({isSubscribe = false}))
  }

  render() {
      const (isSubscribe) = this.state

      return (
          <div>
              <h1>Welcome</h1>
              <button className="button" onClick={onSunscribe}>
                Subscribe
              </button>
              <button className="button" onClick={onSubscribed}>
                Subscribe
              </button>
          </div>
      )
  }
}

export default Welcome
