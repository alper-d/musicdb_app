import React, {Component} from 'react'
import {Input, Button, InputGroup, InputGroupAddon, ButtonToggle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import {SEARCH_PLACEHOLDER} from '../Utilities/Constants'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { toggleDarkMode, fetchMusic } from '../redux/ActionCreators'

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            seachQueryString: "",
            dropdown: false
        }
        this.handleQueryChange = this.handleQueryChange.bind(this)
        this.dropdownToggle = this.dropdownToggle.bind(this)
    }

    dropdownToggle(){
        this.setState({
            dropdown: !this.state.dropdown
        })
    }

    handleQueryChange(e){
        this.setState({
            seachQueryString: e.target.value
        })
    }
    render(){
        return(
            <div className='container'>
                <InputGroup className='m-1'>
                    <Dropdown className='mx-1' isOpen={this.state.dropdown} toggle={this.dropdownToggle}>
                        <DropdownToggle>
                            Recent
                        </DropdownToggle>
                        <DropdownMenu>
                            <Link to='/recent/musics'><DropdownItem>Musics</DropdownItem></Link>
                        </DropdownMenu>
                    </Dropdown>

                    <ButtonToggle className='mx-1' color={this.props.isDark.isDark ? 'light' : 'dark'} onClick={this.props.toggleDark}> {this.props.isDark.isDark ? 'Light' : 'Night'}</ButtonToggle>
                    
                    <Input type='text' id='searchKey' value = {this.state.seachQueryString} 
                    onChange={this.handleQueryChange} placeholder={SEARCH_PLACEHOLDER}/>
                    <Link to={`/music/search/${this.state.seachQueryString}`}>
                        <InputGroupAddon addonType='append'>
                        <Button className='btn'>
                            <span className='fa fa-search'></span>
                        </Button>
                        </InputGroupAddon>
                    </Link>
                </InputGroup>
            </div>
        )
    }

    
}

const mapDispatchToProps = (dispatch) =>{
    return{
        toggleDark: () => {dispatch(toggleDarkMode())},
        makeSearch: (query) => {dispatch(fetchMusic(query))}       
    }
}
const mapStateToProps = (state) => {
    return{
        isDark: state.isDark
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchBar))