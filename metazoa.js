/**
 * metazoa v0.2.1
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
    // Helper to recurse through the tree!
    function recurse(child) {
      var _child = protozoa(child);
      if (child.ref) { node[child.ref] = _child; }
      node.appendChild(protozoa("TEST|"));
      return node.appendChild(_child);
    }
    // `children` can be an array of nested templates
    if (Array.isArray(children)) {
      return children.map(function (child) { return recurse(child); });
    // Or a single template object, or any other value
    } else {
      return recurse(children);
    }
  };

  return function (tmpl) {

    // Custom kernel
    tmpl.kernel = _kernel;

    // Pass it on to Protozoa
    return protozoa(tmpl);
  }

}));
