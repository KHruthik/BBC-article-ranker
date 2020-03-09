import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Header from './components/Header.js'
import Article from './components/Article.js'
import ArticleCard from './components/ArticleCard.js'
import ArticleRanker from './components/ArticleRanker.js'

import './app.css'

import data from './data.json'

export class App extends Component {

  state = {
    visited: []
  }

  componentDidMount() {
    let visitedPages = []
    for(let i = 0; i < data.length; ++i) {
      visitedPages.push(false)
    }

    this.setState({visited: visitedPages})
  }

  visitPage = (index) => {
    let visitedPages = this.state.visited
    visitedPages[index] = true
    this.setState({visited: visitedPages})
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

  visitedAllPages = () => {
    for(let i = 0; i < this.state.visited.length; ++i) {
      if (this.state.visited.length[i] == false) {
        return false
      }
    }
    return true
  }

  generateCards = (data) => {
    let tags = []
    for(let i = 0; i < data.length; ++i) {
        let title = this.getTitle(data[i])
        let image = this.getImage(data[i].body)
        tags.push(<ArticleCard visit={this.visitPage} key={title} id={i} src={image} title={title}/>)
    }
    return tags
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
              <Link className="btn btn-primary rank-button" to="/rank">Rank articles</Link>
            </div>
          )} />
          <Route path="/article/:id" component={Article} />
          <Route path="/rank" component={ArticleRanker} />
        </div>
      </Router>
    )
  }


}

export default App

