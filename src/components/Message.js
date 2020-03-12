import React from 'react'

import tick from '../images/green_tick.png'

export default function Message({match}) {
    if (match.params.success === "1") {
        return (
            <main className="container-fluid" style={{width: 1000}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h1>Thank you</h1>
                    <img src={tick} alt="green tick" style={{width: 150, marginLeft: 20}}/>
                </div>
                <br/>
                <p>Your results have been submitted and saved</p>
                <a href="https://www.bbc.co.uk/">BBC homepage</a>
            </main>
        )
    }else {
        return (
            <main className="container-fluid" style={{width: 1000}}>
                <h1>Error</h1>
                <br/>
                <p>An error has occurred and your results have not been submitted</p>
                <p>Please try again</p>
                <a href="/rank">Rank items</a>
            </main>
        )
    }
}
