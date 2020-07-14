import React from 'react';
import Filter from './Filter';
import SongItem from './SongItem.js'


class SongList extends React.Component {


    generateSongs = () => {
        return this.props.songs.map((song) => <SongItem song={song} key={song.id} handleFavorite = {this.props.handleFavorite}/>)
    }



    render() {   
        console.log(this.props) 
        return (
            <div className="half songlist">
                <h2>Song List</h2>
                <Filter />
                <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Artists</td>
                                <td>Play?</td>
                                <td>Queue?</td>
                                <td>Favorite</td>
                                <td>Likes</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.generateSongs()}
                            {/** TODO: Render a SongItem component per each song here*/}
                        </tbody>
                </table>
            </div>
        )
    }
}


export default SongList;