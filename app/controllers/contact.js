import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  emailValid:   Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  allValid:     Ember.computed.and('emailValid', 'messageValid'),
  isDisabled:   Ember.computed.not('allValid'),
  messageValid: Ember.computed.gte('message.length', 5),

  actions:{

      send(){
        alert(`Sending message from: ${this.get('emailAddress')}`);
        this.set('responseMessage', `Thank you! We've sent your message.`);
        this.set('emailAddress', '');
        this.set('message', '');
      }
  }

});
