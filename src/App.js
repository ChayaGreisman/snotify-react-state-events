import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';


let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {

  state = {
      songsArray: []
  }

  getSongs = () => {
      fetch(API_ENDPOINT)
      .then(resp=> resp.json())
      .then(songs=>{
          this.setState({songsArray: songs})
      })
  }

  handleFavorite = (id, favorite) => {
    fetch( `http://localhost:6001/songs/${id}`, 
    {                
        method: 'PATCH',        
        headers: {
            "Content-Type": "application/json",                    
            "Accept": "application/json"},               
        body: JSON.stringify({ favorite: !favorite })            
    })            
    .then(res => res.json())
    .then(data => {
      let targetSongIndex = this.state.songsArray.findIndex(song => song.id === data.id)
      let copySongs = [...this.state.songsArray]
      copySongs[targetSongIndex] = data
      this.setState({songsArray: copySongs})
    })
   
  }
  
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    console.log(this.state.songsArray)
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songsArray} handleFavorite = {this.handleFavorite}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
