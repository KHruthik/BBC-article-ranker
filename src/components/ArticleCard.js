import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../css/articleCard.css'

export class ArticleCard extends Component {

    render() {
        return (
            <div className="card card-width card-margin shadow rounded">
            <img src={this.props.src} className="card-image"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <br/>
                <Link onClick={() => this.props.visit(this.props.id)} className="btn btn-primary" to={"/article/".concat(this.props.id)}>Read more</Link>
            </div>
            </div>
        )
    }
}

export default ArticleCard
