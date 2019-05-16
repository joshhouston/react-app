import React, {Component} from 'react';
import Data from './Data'
import Navigation from './Navigation';

class Infocard extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataFile: Data,
            nextPerson: 0,
            counter: 1,
            city: ''
        }
        
        
    }
    //Need a function to loop through datafile and get the ID
    //ID needs to be set to the counter
    //Display current ID number
    
    
    
   updateCounter(props){
       this.setState({counter: this.state.counter + 1})
       console.log(this.state.counter)
        let info= this.state.dataFile
        for(let i=0; i < info.length; i++){
            let test = info.map((post) => 
                (post.city)
            )
            if(this.state.counter === 1){
                this.state.city = test[0]
                console.log(this.state.city)
            }else {
                this.state.city = ''
            }
            
        }
       
   }

   decreaseCounter() {
       this.setState({counter:this.state.counter - 1})
       console.log(this.state.counter)
   }
    
    render(){
        return (
            // console.log(this.state.dataFile[0]),
            <section className='mainContent'>
                <div className='infoCard'>
                    <div className="theInfo">
                        <h2>Name</h2>
                        <h3>From: {this.state.city}</h3>
                        <h3>Job Title: </h3>
                        <h3>Employer: </h3>
                    <div className="favMovies">
                        <h3>Favorite Movies:</h3>
                        <ol>
                            <li>Movie 1</li>
                            <li>Movie 2</li>
                            <li>Movie 3</li>
                        </ol>
                    </div>
                    </div>
                <div className="counter">
                    <h1>{this.state.counter}/25</h1>
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