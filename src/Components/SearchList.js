import React, {Component} from 'react'
import SearchCard from './SearchCard'
import {Sear} from 'reactstrap'
import {SEARCH_PLACEHOLDER} from '../Utilities/Constants'
import {Link} from 'react-router-dom'

class SearchBar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const searchCards = props.searchResults.map((id, imgSrc) => {
            <div className='col-12 col md-5 m-1' key='id'>
                <SearchCard imgSrc={imgSrc}></SearchCard>
            </div>
        })

        return(
            <div className='container'>
                <div className='row'>
                    {searchCards}
                </div>
            </div>
        )
    }

    
}

export default SearchBar