import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

import '../css/articleCard.css'

export class ArticleCard extends Component {

    render() {
        return (
            <div className="card card-width align-text-center card-margin shadow rounded">
                <img src={this.props.src} className="card-width"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <br/>
                    <Link onClick={() => this.props.visit(this.props.id)} className="btn btn-primary" to={"/article/".concat(this.props.id)}>Read more</Link>
                </div>
            </div>
        )
    }
}

ArticleCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    src: PropTypes.string,
    visit: PropTypes.func
}

export default ArticleCard
