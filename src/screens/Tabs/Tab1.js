import React, {Component} from 'react';
import {Alert, View, ActivityIndicator} from 'react-native';
import {Container, Content, List, Text} from 'native-base';

import {getArticles} from '../../service/news';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    };
  }

  //lifecycle hook
  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data,
      });
    });
  }
  render() {
    return (
      <Container>
        <Content></Content>
      </Container>
    );
  }
}
