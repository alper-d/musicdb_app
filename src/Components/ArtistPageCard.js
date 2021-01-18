import React, {Component} from 'react'
import {Card, CardBody, CardImg, CardTitle} from 'reactstrap'
import {Link} from 'react-router-dom'

class ArtistPageCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Card className='h-100 searchCard inverse'>
            <Link to={`/album/${this.props.musicInfo.album_id}`}>
                <CardImg width='100%' src={this.props.musicInfo.album_images[0]}></CardImg>
                <CardBody>
                    <CardTitle style={{opacity: 0.8, background: 'white',color: 'black', 'fontWeight': 'bold','borderRadius':'15px'}}>
                    <span className='fa fa-book'></span>{this.props.musicInfo.album_name}</CardTitle>
                </CardBody>
            </Link>
            </Card>
        )
    }

    
}

export default ArtistPageCard