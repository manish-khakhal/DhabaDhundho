import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businesses:[]
    }

    this.searchDhaba = this.searchDhaba.bind(this);
  }

  searchDhaba(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    });
  }

  render(){
    return (
      <div className="App">
        <h1>Dhabha Dhundho</h1>
        <SearchBar searchDhaba={this.searchDhaba}/>
        <BusinessList businesses = {this.state.businesses}/>
      </div>
    );
  }
}

export default App;
