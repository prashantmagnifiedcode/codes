
  import React, { Component } from 'react';
  import { Button, Text, View, StyleSheet, Linking } from 'react-native';
  
  export default class Dashboard extends Component {
    state = {
      connection: false,
      url: 'https://google.com',
    };
  
    checkInternt = () => {
      Linking.canOpenURL(this.state.url).then(connection => {
        if (!connection) {
          this.setState({ connection: false });
        } else {
          fetch(this.state.url).then(res =>
            this.setState({ connection: res.status !== 200 ? false : true })
          );
        }
      });
    };
  
    componentDidMount() {
      this.checkInternt();
    }
  
    handlePress = () => {
      this.setState({
        url:
          this.state.url === 'https://google.com'
            ? 'http://someweirdurlthatdoesntwork.com'
            : 'https://google.com',
      });
      this.checkInternt();
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Text>
            Connection:
            <Text style={{ color: this.state.connection ? 'green' : 'red' }}>
              {`   ${this.state.connection}`}
            </Text>
          </Text>
          
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
  