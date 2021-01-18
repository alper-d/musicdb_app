import React, {Component} from 'react'
import {Badge} from 'reactstrap'
import {connect} from 'react-redux'
import ReactPlayer from 'react-player'

class FooterPlayer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='footer fixed-bottom'>
                <Badge>{this.props.currentlyPlayingName}</Badge>
                <ReactPlayer 
                    url = {this.props.currentlyPlaying}
                    width ='100%' 
                    height='50px'
                    playing={true}
                    controls={true}></ReactPlayer>
            </div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return{
        currentlyPlaying: state.musics.currentlyPlaying,
        currentlyPlayingName: state.musics.currentlyPlayingName
    }
}

export default connect(mapStateToProps)(FooterPlayer)