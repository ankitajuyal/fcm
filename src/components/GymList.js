import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import axios from 'axios';
import CheckInDetails from './CheckInDetails'
import Loader from './loader';
import CardSection from './CardSection';

class GymList extends Component{

// step 1st
state= { albums: [] };
componentWillMount(){

  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({albums:response.data}));  // by component class
  // update component state with new data
}

renderAlbums(){      
  return this.state.albums.map(album =>
     <CheckInDetails key={album.title} album={album}/>
   )
}

render(){
 
  console.log(this.state);
    return (
      <ScrollView>
      <CardSection>
        <View >
          <Text style={{marginLeft: 10,marginTop: 10,fontWeight: 'bold',color: '#000000',fontSize:18}}>Welcome</Text>
          <Text style={{marginLeft: 10,fontWeight: 'bold',color: '#000000',fontSize:18}}>Shweta Kale</Text>
          <Text style={{marginLeft: 10,marginTop: 10,fontWeight: 'bold'}}>ACTIVE MEMBERSHIPS</Text>
        </View>
        <View style={{right:0,  position: 'absolute', marginRight: 10, marginTop: 10}}>
          <Image
          style={{width: 50, height: 50, borderRadius: 50/2}}
          source={require('../img/qr_code.png')}
          onError={this._onError} />
        </View>
      </CardSection>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Make the Component available to other parts of the app
export default GymList;
