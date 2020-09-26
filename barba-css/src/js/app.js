import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);
barba.init({
  transitions: [
    {
      name: 'home',
      beforeOnce(data) {

      },
      once() {

      },
      afterOnce(data) {

      }
    },
  ],
});