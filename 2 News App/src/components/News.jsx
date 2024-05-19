import React, { Component } from 'react'
import NewsComponent from './NewsItem'

export default class News extends Component {

  articles = [{
    "source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},
    {"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }]

  constructor(){
    super();
    console.log("Hello I am constructor from the news componenet")
    this.state = {
      // articles: [],
      articles: this.articles,
      loading: true
    }
  }

  // async componentDidMount(){
  //   console.log("cdm")
  //   let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1219199b6d48c986c9e217b28d6a47";
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({articles:parsedData.articles})
  //   console.log(parsedData)
  // }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>News Here</h2>
          <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col md-4" key={element.url}>
              <NewsComponent title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,90):""} imgUrl={element.urlToImage?element.urlToImage:"https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc"} newsUrl={element.url}/>
            </div>
            })}
          </div>
        </div>
      </>
    )
  }
}
