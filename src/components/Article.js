import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './article.css'

import data from '../data.json'

export class Article extends Component {

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    parseBody = (body) => {
        return body.map(tag =>  {
            if (tag.type === 'paragraph') {
                return this.parseParagraph(tag.model)
            }else if (tag.type === 'heading') {
                return this.parseHeading(tag.model)
            }else if (tag.type === 'image') {
                return this.parseImage(tag.model)
            }else if (tag.type === 'list') {
                return this.parseList(tag.model)
            }else {
                return <h1>Error</h1>
            }
        })
    }

    parseParagraph = (p) => {
        return <p>{p.text}</p>
    }

    parseHeading = (h) => {
        return <h2>{h.text}</h2>
    }

    parseImage = (img) => {
        return <img src={img.url} height={img.height} width={img.width} alt={img.altText}/>
    }

    parseList = (list) => {
        if (list.type) {
            return (
                <ul>
                    {list.items.map(item => <li>{item}</li>)}
                </ul>
            )
        }else {
            return (
                <ol>
                    {list.items.map(item => <li>{item}</li>)}
                </ol>
            )
        }
    }

    render() {
        let article = data[this.props.match.params.id]
        return (
            <div className="container-fluid article">
                <h1>{article.title}</h1>
                {this.parseBody(article.body)}
                <Link className="btn btn-primary" to="/">Return</Link>
            </div>
        )
    }
}
/*
<h2>{this.props.data.title}</h2>
{this.parseBody(this.props.data.body)}
*/
export default Article
