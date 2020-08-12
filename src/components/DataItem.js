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
  render() {
    return (
      <ListItem>
        <Left>
          <Thumbnail />
        </Left>
        <Body>
          <Text numberOfLines={2}>Hello Sprinkles</Text>
          <Text numberOfLines={2}>Let's eat some Sprinkles</Text>
          <View>
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
