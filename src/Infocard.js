import React, {Component} from 'react';
import Data from './Data'
import Navigation from './Navigation';

class Infocard extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataFile: Data,
            counter: 0,
            index: 0
        }
        
        
    }
    //Need a function to loop through datafile and get the ID
    //ID needs to be set to the counter
    //Display current ID number
    
    
    
   updateCounter(props){
    //    this.setState({counter: this.state.counter + 1})
    let meButt = document.getElementById('meButt')
        let index = this.state.index
        // let info= this.state.dataFile
        if(index == this.state.dataFile.length - 1) {
            index = 0;
        }else {
            index++
        }
        this.setState({index})
       
   }

   decreaseCounter() {
       let meButt = document.getElementById('meButt')
       let index = this.state.index
        // let info= this.state.dataFile
        if(index == this.state.dataFile.length) {
            index = 0;
        }else {
            index--
        }
        this.setState({index})
        
   }
    
    render(){
        return (
            // console.log(this.state.dataFile[0]),
            <section className='mainContent'>
                <div className='infoCard'>
                    <div className="theInfo">
                        <h2>{this.state.dataFile[this.state.index].name.first} {this.state.dataFile[this.state.index].name.last}</h2>
                        <h3>From: {this.state.dataFile[this.state.index].city}</h3>
                        <h3>Job Title: {this.state.dataFile[this.state.index].title}</h3>
                        <h3>Employer: {this.state.dataFile[this.state.index].employer}</h3>
                    <div className="favMovies">
                        <h3>Favorite Movies:</h3>
                        <ol>
                            <li>{this.state.dataFile[this.state.index].favoriteMovies[0]}</li>
                            <li>{this.state.dataFile[this.state.index].favoriteMovies[1]}</li>
                            <li>{this.state.dataFile[this.state.index].favoriteMovies[2]}</li>
                        </ol>
                    </div>
                    </div>
                <div className="counter">
                    <h1>{this.state.dataFile[this.state.index].id}/25</h1>
                </div>
                </div>
            <div>
                <Navigation 
                updateCounter={ this.updateCounter.bind(this)}
                decreaseCounter={this.decreaseCounter.bind(this)}
                />
            </div>
            </section>
        )
    }

}

export default Infocard;