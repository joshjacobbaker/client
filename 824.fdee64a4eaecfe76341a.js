"use strict";(self.webpackChunkreactserversiderendering=self.webpackChunkreactserversiderendering||[]).push([[824],{131:function(e,n,t){t.d(n,{YD:function(){return c}});var r=t(7294);var i=new Map,o=new WeakMap,u=0;function s(e,n,t,r){if(void 0===t&&(t={}),void 0===r&&(r=undefined),void 0===window.IntersectionObserver&&void 0!==r){var s=e.getBoundingClientRect();return n(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof t.threshold?t.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),function(){}}var c=function(e){var n=function(e){return Object.keys(e).sort().filter((function(n){return void 0!==e[n]})).map((function(n){return n+"_"+("root"===n?(t=e.root)?(o.has(t)||(u+=1,o.set(t,u.toString())),o.get(t)):"0":e[n]);var t})).toString()}(e),t=i.get(n);if(!t){var r,s=new Map,c=new IntersectionObserver((function(n){n.forEach((function(n){var t,i=n.isIntersecting&&r.some((function(e){return n.intersectionRatio>=e}));e.trackVisibility&&void 0===n.isVisible&&(n.isVisible=i),null==(t=s.get(n.target))||t.forEach((function(e){e(i,n)}))}))}),e);r=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:c,elements:s},i.set(n,t)}return t}(t),a=c.id,f=c.observer,d=c.elements,l=d.get(e)||[];return d.has(e)||d.set(e,l),l.push(n),f.observe(e),function(){l.splice(l.indexOf(n),1),0===l.length&&(d.delete(e),f.unobserve(e)),0===d.size&&(f.disconnect(),i.delete(a))}}function c(e){var n=void 0===e?{}:e,t=n.threshold,i=n.delay,o=n.trackVisibility,u=n.rootMargin,c=n.root,a=n.triggerOnce,f=n.skip,d=n.initialInView,l=n.fallbackInView,v=n.onChange,h=r.useRef(),g=r.useRef(),b=r.useState({inView:!!d}),p=b[0],w=b[1];g.current=v;var y=r.useCallback((function(e){void 0!==h.current&&(h.current(),h.current=void 0),f||e&&(h.current=s(e,(function(e,n){w({inView:e,entry:n}),g.current&&g.current(e,n),n.isIntersecting&&a&&h.current&&(h.current(),h.current=void 0)}),{root:c,rootMargin:u,threshold:t,trackVisibility:o,delay:i},l))}),[Array.isArray(t)?t.toString():t,c,u,a,f,o,l,i]);r.useEffect((function(){h.current||!p.entry||a||f||w({inView:!!d})}));var m=[y,p.inView,p.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}r.Component},8440:function(e,n,t){t.d(n,{_:function(){return f}});var r=t(655),i=t(4394),o=t(7107),u=t(7547);function s(){var e=!1,n=[],t=new Set,s={subscribe:function(e){return t.add(e),function(){t.delete(e)}},start:function(r,i){if(e){var u=[];return t.forEach((function(e){u.push((0,o.d5)(e,r,{transitionOverride:i}))})),Promise.all(u)}return new Promise((function(e){n.push({animation:[r,i],resolve:e})}))},set:function(n){return(0,i.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach((function(e){(0,u.gg)(e,n)}))},stop:function(){t.forEach((function(e){(0,o.p_)(e)}))},mount:function(){return e=!0,n.forEach((function(e){var n=e.animation,t=e.resolve;s.start.apply(s,(0,r.ev)([],(0,r.CR)(n),!1)).then(t)})),function(){e=!1,s.stop()}}};return s}var c=t(7294),a=t(6681);function f(){var e=(0,a.h)(s);return(0,c.useEffect)(e.mount,[]),e}}}]);
//# sourceMappingURL=824.fdee64a4eaecfe76341a.js.map