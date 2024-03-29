import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url}=this.props;
    return (
      <div>
      <div className="card my-3" style={{width: "18rem",height: "25rem" }}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target="_blank" rel='noreferrer' className="btn btn-primary">Go to site</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
