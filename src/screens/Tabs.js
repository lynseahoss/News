import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#E31C79'}} hasTabs>
          <Left />
          <Body>
            <Title style={{color: 'white'}}>Sprinkles News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
          <Tab
            tabStyle={{backgroundColor: '#7F35B2'}}
            activeTabStyle={{backgroundColor: '#7F35B2'}}
            activeTextStyle={{color: 'white'}}
            textStyle={{color: 'white'}}
            heading="US News">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#7F35B2'}}
            activeTabStyle={{backgroundColor: '#7F35B2'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="Entertainment">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#7F35B2'}}
            activeTabStyle={{backgroundColor: '#7F35B2'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
            heading="Arts">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
