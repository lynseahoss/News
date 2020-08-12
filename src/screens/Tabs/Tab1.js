import React, {Component} from 'react';
import {Alert, View, ActivityIndicator} from 'react-native';
import {Container, Content, List, Text} from 'native-base';

import DataItem from '../../components/DataItem';
import {getArticles} from '../../service/news';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    };
  }
  handleItemDataOnPress = articleData => {
    this.setState({});
  };

  //lifecycle hook
  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong!');
      },
    );
  }
  render() {
    let view = this.state.isLoading ? (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait..." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );
    return (
      <Container>
        <Content>{view}</Content>
      </Container>
    );
  }
}
