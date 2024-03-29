import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '../../styles/Header.css'

import Mealtype from './mealtype'

export default class main extends Component {
    constructor(){
        super();
        this.state={
            mealtypes:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/mealTypes',{method:'GET'})
        .then(response=>response.json())
        .then(data=>this.setState({mealtypes:data.data}))
    }

  render() {
    console.log(this.state.mealtypes)

    const mealtypeList=this.state.mealtypes.length && this.state.mealtypes.map( m => <Mealtype key={m._id} item={m}/> )
    return (
        <div className='cont'>

                <div className="container mb-5 ">
                <div className="quick-searches mt-5 ms-4">Quick Searches</div>
                <div className="qs-subtitle mt-2 ms-4">Discover restaurants by type of meal</div>
                <div className="row mt-3">
                    {mealtypeList}
                
                </div>
            </div>
        </div>
    )
  }
}

