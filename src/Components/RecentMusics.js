import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { getRecentMusic,updateCurrentlyPlaying } from '../redux/ActionCreators'
import {secondsToDuration} from '../Utilities/Constants'
import {CardTitle,
        CardSubtitle,Badge, 
        Button, 
        ListGroupItem, 
        PopoverBody, 
        PopoverHeader, 
        UncontrolledPopover,
        ListGroup} from 'reactstrap'

const mapDispatchToProps = (dispatch) =>{
    return{
        getRecent: () => {dispatch(getRecentMusic())},        
        updateCurrentlyPlaying: (url, name) => {dispatch(updateCurrentlyPlaying(url,name))}        
    }
}

const mapStateToProps = (state) => {
    return{
        recentMusics: state.musics.recentMusics
    }
}

class RecentMusics extends Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.getRecent()
    }
    handlePlaying(url,name){
        this.props.updateCurrentlyPlaying(url, name)
    }
    render(){
        if(this.props.recentMusics.length !== 0){
            const renderPopover = (music) => {
                return(
                    <div>
                        <UncontrolledPopover trigger='hover' placement='left' target={`infoPopover${music.id}`}>
                        <PopoverHeader><a target='_blank' href={music.license_ccurl}>Click to see licence.</a></PopoverHeader>
                        <PopoverBody></PopoverBody>
                        </UncontrolledPopover>
                    </div>
                )
            }
            const renderMusic = this.props.recentMusics.map((music) => {
                return(
                    <div className='container' key={music.id}>
                    <ListGroupItem className='my-2' color='primary'>
                    <div className='row justify-content-between'>
                        <CardTitle className='col-12 sm-3 col-md-4 m-1 text-md-left'>{music.name}</CardTitle>
                        <CardSubtitle className='col-12 col-md-2 text-sm-center'>
                        <Link to={`/artist/${music.artist_id}`}>
                        {music.artist_name}
                        </Link>
                        </CardSubtitle>
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
                    </div>
                    </ListGroupItem>
                    {renderPopover(music)}
                    </div>
                )
            })
            return(
                <div className='container recent-list'>
                    <h5>{`Recently Added ${this.props.recentMusics.length} Music`}  
                    </h5>
                    <ListGroup >
                        {renderMusic}
                    </ListGroup>
                </div>
            )}else{
                return(<div></div>)
            }
                
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentMusics)