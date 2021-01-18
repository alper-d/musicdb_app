import React, {Component} from 'react'
import SearchCard from './SearchCard'
import {Badge, CardDeck, CardTitle} from 'reactstrap'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchMusic} from '../redux/ActionCreators'

const mapDispatchToProps = (dispatch) =>{
    return{
        makeSearch: (searchQuery) => {dispatch(fetchMusic(searchQuery))}        
    }
}

const mapStateToProps = (state) => {
    return{
        searchResults: state.musics.musics,
        searchLoading: state.musics.searchLoading
    }
}


class SearchList extends Component{
    constructor(props){
        super(props)
        this.state={
            currentQuery: this.props.match.params.query
        }
    }

    componentDidMount(){
        const searchKeyString = this.props.match.params.query
        this.props.makeSearch(searchKeyString)
    }

    componentDidUpdate(){
        const searchKeyString = this.props.match.params.query
        if(searchKeyString !== this.state.currentQuery){
            this.props.makeSearch(searchKeyString)
            this.setState({currentQuery: searchKeyString})
        }
    }
//
render(){
        if(this.props.searchLoading) {
            return(
                <div className='container loading'>
                    <div className='row align-items-center vh-100' key={this.props.match.params.query}>
                        <div className='col'>
                        <h1><span className='fa fa-cog fa-spin fa-lg'></span></h1>
                        </div>
                    </div>
                </div>
            )
        
        }else if(this.props.searchResults.length !== 0){
            const searchCards = this.props.searchResults.map((musicInfo) => {
                if(this.props.match.params.query === this.state.currentQuery){
                    return(
                        <div className='col-12 col-md-3 my-3' key={musicInfo.id}>
                            <SearchCard musicInfo={musicInfo}></SearchCard>
                        </div>
                )}else{
                    return(
                        <div key={musicInfo.id}>
                        </div>
                    )
                    }
            })
            return(
                <div className='container search-list' key={this.props.match.params.query}>
                    <h5>{`Showing results for `}  
                        <Badge color='secondary'>{this.props.match.params.query}</Badge>
                    </h5>
                    <CardDeck className='row' >
                        {searchCards}
                    </CardDeck>
                </div>
        )}
        else{
            return(
                <div className='container search-list' key={this.props.match.params.query}>
                    <CardTitle>{`No results for `}
                    <Badge color='secondary'>{this.props.match.params.query}</Badge>
                    </CardTitle>
                </div>
            )
                
        }
                
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchList))