import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import Cou from "./Cou";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      ar: [],
      loading: false,
      page: 1,
      tResult: 0,
    };
  }
  async componentDidMount() {
    //https://newsapi.org/v2/everything?q=bitcoin&apiKey=cf3406f893f04512b1cfcdc04452f56c
    //https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cf3406f893f04512b1cfcdc04452f56c&page=1&pagesize=${this.props.pageSize}
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cf3406f893f04512b1cfcdc04452f56c&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: pData.articles });
    this.setState({ tResult: pData.totalResults });
  }

  ppage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=cf3406f893f04512b1cfcdc04452f56c&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: pData.articles });
    this.setState({ page: this.state.page - 1 });
  };

  npage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=cf3406f893f04512b1cfcdc04452f56c&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: pData.articles });
    this.setState({ page: this.state.page + 1 });
  };
  render() {
    return (
      <>
        {/* <div className="container my-4"> */}
          {/* <Cou category={this.props.category} page={this.state.page} /> */}
        {/* </div> */}
        <div className="container my-4">
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1 ? true : false}
            className="btn btn-success "
            onClick={this.ppage}
          >
            &laquo; Prev
          </button>
          <h3>{this.state.page}</h3>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.tResult / this.props.pageSize)
                ? true
                : false
            }
            className="btn btn-success"
            onClick={this.npage}
          >
            Next &raquo;
          </button>
        </div>
      </>
    );
  }
}
