import Controller from '@ember/controller';

export default Controller.extend({
  searchText: '',
  actions: {
    jumpToPokemon() {
      this.transitionToRoute('pokemon', this.get('searchText').toLowerCase());
    }
  }
});
