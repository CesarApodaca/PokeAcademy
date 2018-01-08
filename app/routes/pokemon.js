import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(params){
    return Ember.$.getJSON("https://pokeapi.co/api/v2/pokemon/" + params.name);

  }
});
