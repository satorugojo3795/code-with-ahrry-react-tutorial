import React, { Component } from 'react'
import NewsComponent from './NewsItem'
import Loading from './Loading';

export default class News extends Component {

  constructor(){
    super();
    console.log("Hello I am constructor from the news componenet")
    this.state = {
      articles: [],
      // articles: this.articles,
      page: 1,
      loading: false,
      totalResults: 0
    }
  }

  async componentDidMount(){
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1219199b6d48c986c9e217b28d6a47&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    console.log(parsedData)
  }

  handleNextClick = async () =>{
    // if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    // }
    // else{
      console.log("next was clicked")
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1219199b6d48c986c9e217b28d6a47&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles:parsedData.articles,
        page: this.state.page+1,
        loading: false
      })
    // } 
    // console.log(parsedData)
  }

  handlePrevClick = async () =>{
    console.log("Previous was clicked")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1219199b6d48c986c9e217b28d6a47&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:parsedData.articles,
      page: this.state.page-1,
      loading: false
    })
    // console.log(parsedData)
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>News Here</h2>
          {this.state.loading && <Loading/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col md-4" key={element.url}>
              <NewsComponent title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,90):""} imgUrl={element.urlToImage?element.urlToImage:"https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc"} newsUrl={element.url}/>
            </div>
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">Previous</button>
            <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next</button>
          </div>
        </div>
      </>
    )
  }
}
