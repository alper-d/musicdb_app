import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, CardImg, CardTitle,CardSubtitle} from 'reactstrap'
import {baseUrl, AUTH_TOKEN, secondsToDuration} from '../Utilities/Constants'
import { updateCurrentlyPlaying } from '../redux/ActionCreators'
import {Badge, Button, CardDeck, ListGroup, ListGroupItem, PopoverBody, PopoverHeader, UncontrolledPopover} from 'reactstrap'


const mapDispatchToProps = (dispatch) =>{
    return{
        updateCurrentlyPlaying: (url,name) => {dispatch(updateCurrentlyPlaying(url,name))}        
    }
}

class AlbumComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            albumInfo:null,
            artist:'',
            musics: [],
        }
        this.handlePlaying = this.handlePlaying.bind(this)
        this.togglePopover = this.togglePopover.bind(this)
    }
    componentDidMount(){
        const id = this.props.match.params.id
        const albumInfo = fetch(`${baseUrl}/api/album/${id}`, {
                     method: 'GET',
            headers: {
                'authorization': AUTH_TOKEN
            }
        }).then(response => {
            if(response.ok){
                return response
            }else{
                //error case
            }
        },
        error => {
            //error case
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                albumInfo: response.album,
                musics: response.musics
            })
            const artistID = response.album.artist_id
            const artistInfo = fetch(`${baseUrl}/api/artist/${artistID}`, {
                method: 'GET',
            headers: {
                'authorization': AUTH_TOKEN
            }
            }).then(response => {
            if(response.ok){
                return response
            }else{
                //error case
            }
            },
            error => {
            //error case
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    artist:response.artist
            })
            })
        })
    }


    handlePlaying(url,name){
        this.props.updateCurrentlyPlaying(url,name)
    }
    
    togglePopover(){
        this.setState({
            popoverOpen: !this.state.popoverOpen
        })
    }

    render(){
        if (this.state.albumInfo !== null){
            const renderPopover = (music) => {
                return(
                    <div>
                        <UncontrolledPopover trigger='hover' placement='left' target={`infoPopover${music.id}`}>
                        <PopoverHeader><a href={music.license_ccurl} target='_blank'>Click to see licence.</a></PopoverHeader>
                        <PopoverBody></PopoverBody>
                        </UncontrolledPopover>
                    </div>
                )
            }
            const renderMusic = this.state.musics.map((music) => {
                return(
                    <div className='container' key={music.id}>
                    <ListGroupItem className='my-2 music-bar' color='primary'>
                    <div className='row justify-content-between'>
                        <CardTitle className='col-12 sm-3 col-md-6 m-1 text-md-left'>{music.name}</CardTitle>
                        <div className='col-12 sm-7 col-md-3'>
                        <div className='container'>
                            <div className='row justify-content-between'>
                                <div className='col-12 sm-1 col-md-6 m-1'>
                                <CardSubtitle><Badge>
                                    {secondsToDuration(music.duration)}
                                </Badge></CardSubtitle>
                                </div>
                                <div className='col-12 col-md'>
                                    <Button className='mx-1' id={`infoPopover${music.id}`}>
                                    <span className='fa fa-info'></span>
                                    </Button>
                                    <Button onClick={() =>{this.handlePlaying(music.url,music.name)}}>
                                    <span className='fa fa-play fa-sm'></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* </a> */}
                    </div>
                    </ListGroupItem>
                    {renderPopover(music)}
                    </div>
                )
            })
            return(
                <div className='container'>
                    <CardDeck className='mx-1'>
                        <div className='col12 col-md-3 my-1'>
                        <CardImg src={this.state.albumInfo.images[0]}></CardImg>
                        </div>
                        <div className='col-12 col-md my-1'>
                            <Card className='h-100' color='dark'>
                            <h3><Badge color='secondary'>
                                {this.state.albumInfo.name}
                            </Badge></h3>
                            <Link to={`/artist/${this.state.albumInfo.artist_id}`}>
                                <CardSubtitle><Button>
                                {this.state.artist.name}
                                </Button>
                                </CardSubtitle>
                            </Link>
                            </Card>
                        </div>
                    </CardDeck>
                    <ListGroup className='mx-1'>
                        <div className='w-100'>
                            {renderMusic}
                        </div>
                    </ListGroup>
                </div>
        )}else{
            return(
                <div></div>
            )
        }
    }
    
}

export default connect(null, mapDispatchToProps)(AlbumComponent)