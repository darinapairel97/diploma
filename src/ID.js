
import React from 'react'
import {Route} from "react-router-dom"

function ID(props){
    return(<Route path="/:id" exact render={this.props.portfolio}/>)
}
