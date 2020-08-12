import React, {Component} from 'react';
import {Dimensions, WebView, Modal, Share} from 'react-native';
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

export default class ModalComponent extends Component {
    constructor(props){
        super(props)
    }
    handleClose = ()=>{
        return this.props.onClose()
    }
    render(){
        const {showModal, articleData} = this.props;
        const {url} = articleData;
        return()
    }
}