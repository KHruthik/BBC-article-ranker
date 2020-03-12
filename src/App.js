import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Header from './components/Header.js'
import Article from './components/Article.js'
import ArticleCard from './components/ArticleCard.js'
import ArticleRanker from './components/ArticleRanker.js'
import Message from './components/Message.js'

import './css/app.css'

import data from './data.json'

export class App extends Component {

  state = {
    numOfArticlesVisited: 0,
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/rank' />
    }
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
          return [data[i].model.url, data[i].model.altText]
        }
      }
    }
  }

  generateCards = (data) => {
    let cards = []
    for(let i = 0; i < data.length; ++i) {
        let title = this.getTitle(data[i])
        let image = this.getImage(data[i].body)
        cards.push(<ArticleCard visit={this.visitPage} key={i} id={i} src={image[0]} altText={image[1]} title={title}/>)
    }
    return cards
  }

  goToRankPage = () => {
    if (this.state.numOfArticlesVisited >= data.length) {
      this.setRedirect()
    }else {
      alert("Please read all the articles before ranking")
    }
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render= {props =>(
              <div className="container-fluid page-width">
                <main className="flexbox cards-section">
                  { this.generateCards(data)}
                </main>
                {this.renderRedirect()}
                <button className="btn btn-primary rank-button" onClick={this.goToRankPage}>Rank articles</button>
              </div>
            )} />
            <Route path="/rank/" component={ArticleRanker} />
            <Route path="/article/:id/" component={Article} />
            <Route path="/message/:success/" component={Message} />
          </Switch>
          
        </div>
      </Router>
    )
  }


}


export default App

