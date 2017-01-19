import React, { Component } from 'react';
import Container from '../components/Container';
import { Header } from '../components/Text';
import LocateMeButton from '../components/LocateMeButton';

class FindNearMe extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  handleGeolocationSuccess = (position) => {
    const { coords } = position;
    console.log('latitude', coords.latitude);
    console.log('longitude', coords.longitude);

  }

  handleGeolocationError = (error) => {
    console.error(error.message);
  }

  handlePress = () => {
    navigator.geolocation.getCurrentPosition(
      this.handleGeolocationSuccess,
      this.handleGeolocationError,
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

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
