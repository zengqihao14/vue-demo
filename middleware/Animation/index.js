import { TweenMax } from 'gsap';

export const TextAnimation = (target, data, duraction) => {
  TweenMax.to(target, duraction, {...data})
};

export const BoxClickAnimation = (el, isBusy, isActived, onStart, onComplete) => {
  TweenMax.to(el, 1, {
    ease: 'Strong.easeInOut',
    x: isActived ? 0 : 200,
    rotation: isActived ? 0 : 360,
    backgroundColor: isActived ? 'red' : 'blue',
    onStart,
    onComplete
  });
  TweenMax.to(el, .25, {
    y: -30
  });
  TweenMax.to(el, .5, {
    delay: .25,
    y: 30
  });
  TweenMax.to(el, 1, {
    delay: .5,
    y: 0
  });
  TweenMax.to(el, .5, {
    backgroundColor: 'green',
    borderRadius: '50%',
    opacity: 0.75
  });
  TweenMax.to(el, 1, {
    delay: 0.5,
    backgroundColor: isActived ? 'blue' : 'red',
    borderRadius: '8px',
    opacity: 1,
    y: 0
  });
};

export const ListInAnimation = (elList) => {
  TweenMax.staggerFrom(elList, 1.8, {
    ease: 'Strong.easeOut',
    x: 400,
    opacity: 0,
    backgroundColor: '#333',
    skewX: -60
  }, .2);
};
