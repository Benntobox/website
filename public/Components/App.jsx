import React from 'react';
import { Header } from './Header.jsx';
import { Sidebar } from './Sidebar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: 'HOME' }
  }

  setPage(page) {
    this.setState({ tab: page });
  }

  render() {
    return (
    <div className='main'>
      <Header tab={this.state.tab} />
      <Sidebar tab={this.state.tab} set={this.setPage.bind(this)} />
    </div>
    )
  }
}

export default App;