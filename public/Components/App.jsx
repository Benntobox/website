import React from 'react';
import { Header } from './Header.jsx';
import { Main } from './Main.jsx';
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
      <Main tab={this.state.tab} />
      <Footer />
    </MainContainer>
    )
  }
}

export default App;