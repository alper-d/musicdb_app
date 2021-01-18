import React, {Component} from 'react'
import ArtistPageCard from './ArtistPageCard'
import {CardDeck, Badge} from 'reactstrap'
import {connect} from 'react-redux'
import { fetchMusic } from '../redux/ActionCreators'
import {baseUrl, AUTH_TOKEN} from '../Utilities/Constants'

const mapDispatchToProps = (dispatch) =>{
    return{
        makeSearch: (searchQuery) => {dispatch(fetchMusic(searchQuery))}        
    }
}

const mapStateToProps = (state) => {
    return{
        searchResults: state.musics
    }
}


class ArtistComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            artist:{
                artist:{
                    name:''
                },
                albums: [],
                musics:[]
            }
        }

    }

    componentDidMount(){
        const searchKeyString = this.props.match.params.query
        const artistID = this.props.match.params.id
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
                artist:response
        })
        })
    }
//
    render(){
        if(this.state.artist !== null){
            const tmp = [...this.state.artist.musics]
            const searchCards = tmp.filter((val,i,a) =>a.findIndex(t=>(t.album_id === val.album_id)) === i).map((musicInfo) => {
                return(
                    <div className='col-12 col-md-3 mb-3' key={musicInfo.id}>
                        <ArtistPageCard musicInfo={musicInfo}></ArtistPageCard>
                    </div>
                )
            })
            return(
                <div className='container'>
                    <h5>{`Albums of: `}  
                        <Badge color='secondary'>{this.state.artist.artist.name}</Badge>
                    </h5>
                    <CardDeck >
                        {searchCards}
                    </CardDeck>
                </div>
            )}else{
                return(<div></div>)
            }
                
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistComponent)