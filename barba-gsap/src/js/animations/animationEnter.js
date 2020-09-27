import gsap from 'gsap';

const animationEnter = (container) => {
    // eslint-disable-next-line no-undef
    return gsap.from(container, { autoAlpha: 0,
        duration: 2,
        clearProps: 'all',
        ease: 'none' });
};

export default animationEnter