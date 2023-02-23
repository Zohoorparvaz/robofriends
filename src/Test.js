import { Component } from "react"

class Test extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Testig Classes</h1>
        <p>continue testing</p>
        <p>{this.props.testProps}</p>
      </div>
    )
  }
}

export default Test;