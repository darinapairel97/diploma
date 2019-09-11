import React from 'react'
import { withRouter } from 'react-router-dom'

// component import
import Map from './Map'
import  PortfolioItem from './PortfolioItem'

// material-ui imports
import { withStyles } from '@material-ui/core/styles';
import theme from './theme.js';
import FilledInput from '@material-ui/core/FilledInput';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class PortfolioList extends React.Component{


    constructor(props){
        super(props)

        let data = []

        for(const key in localStorage){
            if (key.includes('user_')){
                console.log('localStorage[key]',localStorage[key])

                try {
                    data.push(JSON.parse(localStorage[key]))
                } catch (e) {}
            }
        }

        this.state = {
            data,
            filteredData: data,
            search: '',
            searchBy: 'name'
        }
        this.searchHandle = this.searchHandle.bind(this)
        this.selectHandle = this.selectHandle.bind(this)

    }


    isInStr(str, substr){
        if(typeof (str) === 'string' && typeof (substr) === 'string'){
            return str.toUpperCase().indexOf(substr.toUpperCase()) > -1
        } else if (Array.isArray(str)){
            return str.map(i=>i.value.toUpperCase().indexOf(substr.toUpperCase())>-1).some(sub=>sub===true)
        } else {
            return false
        }
    }

    searchHandle(e){

        const {searchBy} = this.state
        let newData = [...this.state.data]

        if(searchBy === 'name'){
            newData = newData.filter(item => this.isInStr(item.vk.name, e.target.value))
        } else if (searchBy === 'city'){
            newData = newData.filter(item => this.isInStr(item.data.address, e.target.value))
        } else if (searchBy == 'pLang'){
            newData = newData.filter(item => this.isInStr(item.data.langs, e.target.value))
        }

        this.setState({...this.state, filteredData: newData, search: e.target.value})
    }

    selectHandle(e){
        this.setState({...this.state, searchBy: e.target.value})
    }

    render(){
        const {classes} = this.props
        const types = [{id: 'name', label: 'Имя'}, {id: 'pLang', label: 'Языки программирования'},{id: 'city', label: 'Локация'}]
        return(
            <div>
                <FilledInput className={classes.input} onChange={this.searchHandle} />

                <Select className={`${classes.input} ${classes.inputSel}`} onChange={this.selectHandle} value={this.state.searchBy}>
                    {types.map((itm, i) => {return (<MenuItem key={i} value={itm.id}>{itm.label}</MenuItem>)})}
                </Select>
                <div className={`${classes.flex} ${classes.flexSpaceBetween}`}>
                    <div>
                        {this.state.filteredData.map((item, i) =>  !item.vk.name? null:<PortfolioItem key={i} viewPortfolio={this.props.viewPortfolio} item = {item} /> )}

                    </div>
                    <Map data = {this.state.filteredData}/>
                </div>
            </div>
        )
    }
}
export default withRouter(withStyles(theme)(PortfolioList))