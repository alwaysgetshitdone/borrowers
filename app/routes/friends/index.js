import Ember from 'ember';

export default Ember.Route.extend({
  model: functiuon() {
      return this.store.find('friend');
  }
});
