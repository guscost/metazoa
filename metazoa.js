/**
 * metazoa v0.1.1
 * MIT License
 * Copyright 2017 Gus Cost
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['protozoa'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('protozoa'));
  } else {
    root.metazoa = factory(root.protozoa);
  }
}(this, function (protozoa) {

  // Recursive kernel describes what to do with nested values or templates
  var _kernel = function (node, children) {
    return children.map(function (child) {
      var _child = protozoa(child); // Recurse through the tree!
      if (child.ref) { node[child.ref] = _child; }
      node.appendChild(protozoa("TEST|"));
      return node.appendChild(_child);
    })
  };

  return function (tmpl) {
    tmpl.kernel = _kernel;
    return protozoa(tmpl);
  }

}));
