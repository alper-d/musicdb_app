import React, {Component} from 'react'
import SearchBar from './SearchBar'
import SearchList from './SearchList'
import FooterPlayer from './FooterPlayer'
import ArtistComponent from './ArtistComponent'
import AlbumComponent from './AlbumComponent'
import RecentMusics from './RecentMusics'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'


class MainComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='App'>
                <SearchBar/>  
                <Switch location={this.props.location}>
                    <Route exact path='/music/search/:query' component={SearchList} />
                    <Route path='/album/:id' component={AlbumComponent}/> 
                    <Route path='/artist/:id' component={ArtistComponent}/>
                    <Route path='/recent/musics' component={RecentMusics}/>
                    <Redirect to='/music/search'/> 
                </Switch>
                <FooterPlayer/>
            </div>
        )
    }
}

export default MainComponent