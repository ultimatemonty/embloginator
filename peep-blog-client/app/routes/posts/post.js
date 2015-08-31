import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('post', params.post_id);
	},
	actions: {
		delete: function() {
			if (confirm('Delete this post?')) {
				let post = this.currentModel;
				post.destroyRecord().then(() => {
					this.transitionTo('posts');
				});
			}
		}
	}
});
