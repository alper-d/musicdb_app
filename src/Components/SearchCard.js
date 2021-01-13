import React, {Component} from 'react'
import {Card, CardImg} from 'reactstrap'
import {SEARCH_PLACEHOLDER} from '../Utilities/Constants'
import {Link} from 'react-router-dom'

class SearchCard extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <Link to=''>
                <Card>
                    <CardImg width='100%' src={props.imgSrc}>
                    </CardImg>
                </Card>
                </Link>
            </div>
        )
    }

    
}

export default SearchCard