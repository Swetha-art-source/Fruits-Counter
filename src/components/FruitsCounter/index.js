// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eatMango = () => {
    this.setState(prevSate => ({count1: prevSate.count1 + 1}))
  }

  eatBanana = () => {
    this.setState(prevSate => ({count2: prevSate.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">
            Bob ate <span className="count">{count1}</span> mangoes
            <span className="count"> {count2}</span> bananas
          </h1>
          <div className="image-container">
            <div className="image-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button type="button" className="btn" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="image-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button type="button" className="btn" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
