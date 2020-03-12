import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../css/article.css'

import data from '../data.json'

export class Article extends Component {

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    parseBody = (body) => {
        let bodyElements = []
        for(let i = 0; i < body.length; ++i) {
            let tag = body[i]
            if (tag.type === 'paragraph') {
                bodyElements.push(this.parseParagraph(tag.model, i))

            }else if (tag.type === 'heading') {
                bodyElements.push(this.parseHeading(tag.model, i))

            }else if (tag.type === 'image') {
                bodyElements.push(this.parseImage(tag.model, i))

            }else if (tag.type === 'list') {
                bodyElements.push(this.parseList(tag.model, i))

            }else {
                bodyElements.push(<h1>Error</h1>)
            }
        }
        return bodyElements
    }

    parseParagraph = (p, index) => {
        return <p key={index}>{p.text}</p>
    }

    parseHeading = (h, index) => {
        return <h2 key={index}>{h.text}</h2>
    }

    parseImage = (img, index) => {
        return <img key={index} className="image-margin" src={img.url} height={img.height} width={img.width} alt={img.altText}/>
    }

    parseList = (list, index) => {
        if (list.type === 'unordered') {
            return (
                <ul key={index}>
                    {list.items.map(item => <li key={item}>{item}</li>)}
                </ul>
            )
        }else {
            return (
                <ol key={index}>
                    {list.items.map(item => <li key={item}>{item}</li>)}
                </ol>
            )
        }
    }

    render() {
        let article = data[this.props.match.params.id]
        return (
            <div className="container-fluid page-width">
                <h1>{article.title}</h1>
                {this.parseBody(article.body)}
                <Link className="btn btn-primary" to="/">Return</Link>
            </div>
        )
    }
}

export default Article
