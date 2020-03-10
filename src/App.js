import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header.js'
import Article from './components/Article.js'
import ArticleCard from './components/ArticleCard.js'
import ArticleRanker from './components/ArticleRanker.js'
import Message from './components/Message.js'

import './css/app.css'

import data from './data.json'

export class App extends Component {

  state = {
    numOfArticlesVisited: 0
  }

  
  visitPage = () => {
    this.setState({numOfArticlesVisited: this.state.numOfArticlesVisited + 1})
  }

  getTitle = (data) => {
    return data.title
  }

  getImage = (data) => {
    if (data) {
      for (let i = 0; i < data.length; ++i) {
        if (data[i].type === "image") {
          return data[i].model.url
        }
      }
    }
  }

  generateCards = (data) => {
    let cards = []
    for(let i = 0; i < data.length; ++i) {
        let title = this.getTitle(data[i])
        let image = this.getImage(data[i].body)
        cards.push(<ArticleCard visit={this.visitPage} id={i} src={image} title={title}/>)
    }
    return cards
  }

  goToRankPage = () => {
    if (this.state.numOfArticlesVisited >= data.length) {
      window.location.replace("/rank")
    }else {
      alert("Please read all the articles before ranking")
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render= {props =>(
            <div className="container-fluid main-area">
              <main>
                { this.generateCards(data)}
              </main>
              <button className="btn btn-primary rank-button" onClick={this.goToRankPage}>Rank articles</button>
            </div>
          )} />
          <Route path="/article/:id" component={Article} />
          <Route path="/rank" component={ArticleRanker} />
          <Route path="/message/:success" component={Message} />
        </div>
      </Router>
    )
  }


}

export default App

