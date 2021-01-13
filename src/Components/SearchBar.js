import React, {Component} from 'react'
import {Input, Button} from 'reactstrap'
import {SEARCH_PLACEHOLDER} from '../Utilities/Constants'
import {Link} from 'react-router-dom'

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            seachQueryString: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(){
        const searchKeyString = document.getElementById('searchKey').value
        this.setState({
            seachQueryString: searchKeyString
        })

    }
    render(){
        return(
            <div>
                <div className='container'>
                    <div className='input-group' >
                        <Input type='text' id='searchKey' placeholder={SEARCH_PLACEHOLDER}/>
                        <Link to={`search/${this.state.seachQueryString}`}>
                        <Button type= 'button' className='btn' onClick={this.handleSearch}>
                            <span className='fa fa-search'></span>
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default SearchBar