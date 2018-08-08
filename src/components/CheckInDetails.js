import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const CheckInDetails = ({album}) => {
  // multiple references of your props object then refactor like bellow
const{title, thumbnail_image, artist, image, url} = album;
const { thumbnailStyle, headerContentStyle, blackHeadingStyle, headerTextStyle, thumbnailContainerStyle, imageStyle, blueHeadingStyle, textStyle} = styles;

return (
    <Card>
        <View style={ headerContentStyle }>
          <Text style={ blueHeadingStyle }>Check in gym</Text>
          <Text style={ blackHeadingStyle }>GymShim membership plan</Text>
        </View>
        
      <CardSection>
        <View style={ thumbnailContainerStyle }>
          {/* <Image
          style={ thumbnailStyle }
          source={{ uri:thumbnail_image }}
          /> */}
          <Image
          style={ thumbnailStyle }
          source={require('../img/qr_code.png')}
          />
        </View>

        <View style={ thumbnailContainerStyle }>
          <Text style={ blackHeadingStyle }>Start Date</Text>
          <Text style={ {alignItems: 'flex-start',fontSize:15,marginLeft: 10, marginBottom: 10} }>23-5-2018</Text>
          <Text style={ blackHeadingStyle }>Total</Text>
          <Text style={ textStyle }>180 sessions</Text>
        </View>

        <View style={ thumbnailContainerStyle }>
          <Text style={ blackHeadingStyle }>End Date</Text>
          <Text style={{ alignItems: 'flex-start',fontSize:15,color: '#ff0000',marginLeft: 10, marginBottom: 10 }}>23-5-2019</Text>
          <Text style={ blackHeadingStyle }>Remaining</Text>
          <Text style={ textStyle }>177 sessions</Text>
        </View>
        
      </CardSection>
      <CardSection>
      <View style={ {marginTop: 10} }>
          <Text style={ blackHeadingStyle }>Tuesday</Text>
        </View>
        <View style={ thumbnailContainerStyle }>
          <Text style={ {marginLeft: 10}}>10:30PM-11:30 PM</Text>
        </View>
      </CardSection> 

     {/* <CardSection>
          <Image style={imageStyle} source={{uri: image}} />
      </CardSection> 

      <CardSection> 
        <Button onPress={() => Linking.openURL(url)}>
          Bye Now
        </Button>
      </CardSection> */}
      </Card>
  );
};


const styles ={
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  thumbnailContainerStyle: {
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
    marginBottom:10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    marginLeft: 10,
    width: null
  },
  blueHeadingStyle:{
    fontSize:18,
    color: '#0000cd',
    textAlign: 'left',
    marginLeft: 10
  },
  textStyle:{
    alignItems: 'flex-start',
    fontSize:15,
    marginLeft: 10
  },
  blackHeadingStyle:{
    alignItems: 'flex-start',
    fontSize:15,
    color: '#000000',
    marginLeft: 10
  }

}

export default CheckInDetails;
