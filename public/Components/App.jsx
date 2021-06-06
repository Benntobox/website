import React from 'react';
import { Header } from './Header.jsx';
import { Display } from './Display.jsx';
import { Footer } from './Footer.jsx';
import { MainContainer, SideLine } from './styles.js';

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
    <MainContainer className='main container'>
      <SideLine />
      <Header tab={this.state.tab} set={this.setPage.bind(this)}/>
      <Display tab={this.state.tab} />
      <Footer tab={this.state.tab} set={this.setPage.bind(this)}/>
    </MainContainer>
    )
  }
}

export default App;