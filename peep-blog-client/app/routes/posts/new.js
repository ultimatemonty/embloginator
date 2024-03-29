import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('post');
	},
	actions: {
		save: function() {
			let post = this.currentModel;
			post.save().then(() => {
				this.transitionTo('posts');
			});
		}
	}
});
