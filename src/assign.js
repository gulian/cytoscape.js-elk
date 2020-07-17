/* eslint-disable no-func-assign */
// Simple, internal Object.assign() polyfill for options objects etc.

function assign(tgt, ...srcs) {
  srcs.forEach(src => {
    Object.keys(src).forEach(k => (tgt[k] = src[k]));
  });

  return tgt;
}

if (Object.assign) {
  assign = Object.assign.bind(Object);
}

export default assign;
