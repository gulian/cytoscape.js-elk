export default {
  nodeDimensionsIncludeLabels: false, // Boolean which changes whether label dimensions are included when calculating node dimensions
  fit: true, // Whether to fit
  padding: 20, // Padding on fit
  animate: false, // Whether to transition the node positions
  animateFilter: function () {
    // Whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
    return true;
  },
  animationDuration: 500, // Duration of animation in ms if enabled
  animationEasing: undefined, // Easing of animation if enabled
  transform: function (node, pos) {
    // A function that applies a transform to the final node position
    return pos;
  },
  ready: undefined, // Callback on layoutready
  stop: undefined, // Callback on layoutstop
  elk: { // Options to pass directly to ELK `layoutOptions`
    // the elk algorithm to use
    // one of 'box', 'disco', 'force', 'layered', 'mrtree', 'radial', 'random', 'stress'
    // (see https://www.eclipse.org/elk/reference/algorithms.html)
    algorithm: undefined
  },
  priority: function () { return null; }, // Edges with a non-nil value are skipped when geedy edge cycle breaking is enabled
};
