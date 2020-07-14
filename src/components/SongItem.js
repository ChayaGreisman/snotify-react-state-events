import React from 'react';



class SongItem extends React.Component{

    state= {
        likes: 0
    }



    handleLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
    
    render(){
        console.log(this.props)
        
        return (
            <tr>
                <td>{this.props.song.title}</td>
                <td>{this.props.song.artist}</td>
                <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
                <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
                <td onClick={() => this.props.handleFavorite(this.props.song.id, this.props.song.favorite)}>{this.props.song.favorite ? "💚" : "♡"}</td>
                <td onClick={this.handleLike}>Likes: {this.state.likes}</td>
            </tr>
        )
    }
}

export default SongItem;