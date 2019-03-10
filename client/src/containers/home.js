import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchRestaurants } from '../actions/restaurants'
import Header from '../components/header'
import Card from '../components/card'

const Home = props => {
  const [searchData, updateSearchData] = useState({
    term: null,
    location: 'nigeria',
  });
  const updateKeyword = e => updateSearchData({ ...searchData, term: e.target.value });
  const search = e => {
    e.preventDefault();
    props.searchRestaurants(searchData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <Header 
        onChangeTerm={updateKeyword}
        onSearch={search}
      />
      <div class="card-container">
        <Card />
      </div>
    </div>
  )
}



export default connect(() => ({}), { searchRestaurants })(Home);
