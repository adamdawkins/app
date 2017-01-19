import { Meteor } from 'meteor/meteor';
import { Locations } from './locations';

Meteor.methods({
  'locations.getNearestLocations'({ latitude, longitude }) {
    console.log('latitude', latitude);
    console.log('longitude', longitude);
    return Locations.find({}, { limit: 10 }).fetch();
  },
});
