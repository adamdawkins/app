import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';
import LocateMeButton from '../components/LocateMeButton';
import config from '../config/config';
import Meteor from 'react-native-meteor';

class FindNearMe extends Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  handleGeolocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    const params = {
      latitude,
      longitude,
    };
    
    Meteor.call('locations.getNearestLocations', params, (error, locations) => {
      if (error) {
        return this.props.navigator.showLocalAlert(error.reason, config.errorStyles);
      }

      console.log('locations', locations);
    });
  };

  handleGeolocationError = (error) => {
    console.error(error.message);
  };

  handlePress = () => {
    navigator.geolocation.getCurrentPosition(
      this.handleGeolocationSuccess,
      this.handleGeolocationError,
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
      <Container>
      <LocateMeButton onPress={this.handlePress} />
        <Header>
          Find Nearest Charging Stations
        </Header>
      </Container>
    );
  }
}

export default FindNearMe;
