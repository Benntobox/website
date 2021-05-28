import React from 'react';
import { Title, SecondTitle } from './Styled.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 }
  }

  setPage(num) {
    this.setState({ tab: num });
  }

  render() {
    return (
    <div>
      {this.state.tab === 0 ?
      <Title>TESTING MORE</Title> :
      <SecondTitle>AND EVEN MORE</SecondTitle>
      } 
    </div>
    )
  }
}

export default App;