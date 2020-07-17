import elk from './elk';
import assign from './assign';
import defaults from './defaults';
import makeGraph from './convert-graph';

function getPos(ele) {
  const parent = ele.parent();
  const k = ele.scratch('elk');
  const p = {
    x: k.x,
    y: k.y
  };

  if (parent.nonempty()) {
    const kp = parent.scratch('elk');

    p.x += kp.x;
    p.y += kp.y;
  }

  return p;
}

function Layout(options) {
  const elkOptions = options.elk;

  this.options = assign({}, defaults, options);
  this.options.elk = assign({}, defaults.elk, elkOptions);
}

Layout.prototype.run = function () {
  const layout = this;
  const options = this.options;

  const eles = options.eles;
  const nodes = eles.nodes();
  const edges = eles.edges();

  const graph = makeGraph(nodes, edges, options);

  elk
    .layout(graph, {
      layoutOptions: options.elk,
    })
    .then(() => {
      nodes
        .filter(n => !n.isParent())
        .layoutPositions(layout, options, getPos);
    });

  return this;
};

Layout.prototype.stop = function () {
  return this; // chaining
};

Layout.prototype.destroy = function () {
  return this; // chaining
};

export default Layout;