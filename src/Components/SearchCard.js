import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap'

class SearchCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Card className='h-100 searchCard inverse'>
            <Link to={`/album/${this.props.musicInfo.album_id}`}>
                <CardImg width='100%' src={this.props.musicInfo.album_images[0]}>
                </CardImg>
                <CardImgOverlay>
                </CardImgOverlay>
                <CardBody>
                    <CardText tag='h6'>
                        {this.props.musicInfo.name}
                    </CardText>
                    <CardTitle style={{opacity: 0.8, background: 'white',color: 'black', 'fontWeight': 'bold','borderRadius':'15px'}}>
                    <span className='fa fa-book'></span>{this.props.musicInfo.album_name}</CardTitle>
                </CardBody>
            </Link>
            </Card>
        )
    }
}

export default SearchCard