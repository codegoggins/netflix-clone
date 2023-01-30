import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../requestsAPI'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row title='Trending' fetch={requests.requestTrending}/>
      <Row title='Top Rated' fetch={requests.requestTopRated}/>
      <Row title='Popular' fetch={requests.requestPopular}/>
      <Row title='Upcoming' fetch={requests.requestUpcoming}/>
      <Row title='Horror' fetch={requests.requestHorror}/>
    </div>
  );
}

export default Home