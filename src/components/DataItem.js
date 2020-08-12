import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  View,
  Text,
  Button,
} from 'native-base';

class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  handlePress = () => {
    const {url, title} = this.data;
    this.props.onPress({url, title});
  };
  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : 'data:image/png; base64, https://pixabay.com/photos/taxi-cab-traffic-cab-new-york-381233/',
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text numberOfLines={2}>{this.data.description}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: 0,
            }}>
            <Text></Text>
          </View>
        </Body>
        <Right>
          <Button>
            <Text></Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
export default DataItem;
