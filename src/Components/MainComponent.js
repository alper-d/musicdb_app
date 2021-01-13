import React, {Component} from 'react'
import SearchBar from './SearchBar'
import SearchList from './SearchList'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class MainComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Route path='/search' component={SearchBar} />
                <Route path='search/:searchKey' component={SearchList} />
                <Redirect to='/search'/> 
            </div>
        )
    }
}

export default MainComponent