import React, {Component} from 'react';
import {Alert, View, ActivityIndicator} from 'react-native';
import {Container, Content, List, Text} from 'native-base';

import DataItem from '../../components/DataItem';
import ModalComponent from '../../components/Modal';
import {getArticles} from '../../service/news';

export default class Tab1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }
  handleItemDataOnPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };
  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };
  //lifecycle hook
  componentDidMount() {
    getArticles('science').then(data => {
      this.setState({
        isLoading: false,
        data: data,
      });
    });
  }
  render() {
    let view = this.state.isLoading;
    return (
      <Container>
        <Content>{view}</Content>
        <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
