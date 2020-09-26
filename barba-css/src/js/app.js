import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);
const body = document.querySelector('body');

// global hook that runs before any transition
barba.hooks.before((data) => {

  const background = data.current.container.dataset.background;
  body.style.setProperty('---page-background', background);

})

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
    {
      name: 'fade',
      to: {
        namespace: ['fade']
      },
      leave() {},
      enter() {}
    },
    {
      name: 'clip',
      sync: true,
      to: {
        namespace: ['clip']
      },
      leave() {},
      enter() {},
      beforeEnter() {

      }
    },
  ],
});