import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  emailValid:   Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  allValid:     Ember.computed.and('emailValid', 'messageValid'),
  isDisabled:   Ember.computed.not('allValid'),
  messageValid: Ember.computed.gte('message.length', 5),

  actions:{

      send(){
        const emailFrom = this.get('emailAddress');
        const message = this.get('message');

        const newContact = this.store.createRecord('contact', { email: emailFrom, message: message });

        newContact.save().then((response) => {
          this.set('responseMessage', `Thank you! We saved your message with the following id: ${response.get('id')}`);
          this.set('emailAddress', '');
          this.set('message', '');
        });

      }
  }

});
