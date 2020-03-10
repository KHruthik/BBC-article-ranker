import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../css/articleRanker.css'

import data from '../data.json'

export class ArticleRanker extends Component {

    getTitles = () => {
        return data.map(article => article.title)
    }

    getTitleOptionElms = (titles) => {
        return titles.map(title => <option value={title}>{title}</option>)
    }

    createOptions = () => {
        let tableRows = []
        
        for(let i = 0; i < data.length; ++i) {
            tableRows.push(
                <tr>
                    <td>
                        <div className='number-box'>{i + 1}</div>
                    </td>
                    <td>
                    <select id={"option".concat(i)} name = "dropdown" className="dropdown-size">
                        {this.getTitleOptionElms(this.getTitles())}
                    </select>
                    </td>
                </tr>
            )
        }

        return tableRows
    }

    hasDuplicates = (array) => {
        return (new Set(array)).size !== array.length;
    }

    getResponses = () => {
        let selectedOptions = []
        for (let i = 0; i < data.length; ++i) {
            let option = document.getElementById("option".concat(i))
            selectedOptions.push(option.value)
        }
        return selectedOptions
    }

    submitResponse = () => {
        if (!this.hasDuplicates(this.getResponses())) {
            window.location.replace('/message/1')
        }else {
            alert("Please choose unique values for each box")
        }
    }

    render() {
        return (
            <main className="container-fluid flex-container">
                <p>Please rank the article in order of most interesting. (1 meaning most interesting and {data.length} meaning least interesting)</p>
                <table id="ranking-structure">
                    {this.createOptions()}
                </table>
                <button className="btn btn-primary" onClick={this.submitResponse}>Submit</button>
            </main>
        )
    }
}

export default ArticleRanker
