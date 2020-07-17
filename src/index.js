import impl from './layout';

// registers the extension on a cytoscape lib ref
function register(cytoscape) {
  // can't register if cytoscape unspecified
  if (!cytoscape) {
    return;
  }

  cytoscape('layout', 'elk', impl); // register with cytoscape.js
}

// expose to global cytoscape (i.e. window.cytoscape)
if (typeof cytoscape !== 'undefined') {
  // eslint-disable-next-line no-undef
  register(cytoscape);
}

export default register;
