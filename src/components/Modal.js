import React, {Component} from 'react';
import {Dimensions, Modal} from 'react-native';
import {WebView} from 'react-native-webview';

import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
} from 'native-base';
const webViewHeight = Dimensions.get('window').height - 56;
export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    return this.props.onClose();
  };
  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData;
    return (
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={this.handleClose}>
        <Container
          style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
          <Header style={{backgroundColor: '#E31C79'}}>
            <Left>
              <Button onPress={this.handleClose} transparent>
                <Icon name="close" style={{color: 'white', fontSize: 30}} />
              </Button>
            </Left>
            <Body>
              <Title
                children={articleData.title}
                style={{color: 'white'}}></Title>
            </Body>
            <Right />
          </Header>
          <Content contentContainerStyle={{height: webViewHeight}}>
            <WebView
              source={{uri: url}}
              style={{flex: 1}}
              onError={this.handleClose}
              startInLoadingState
              scalesPageToFit
            />
          </Content>
        </Container>
      </Modal>
    );
  }
}
