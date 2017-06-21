# metazoa
metazoa is an project to extend [protozoa](https://github.com/guscost/protozoa) with alternative methods of walking and updating the DOM tree. It overrides the internal `kernel` function that protozoa uses.

As a proof of concept, this first demo just appends a text Node containing "TEST|" before every nested node when rendering. However the idea is that this could potentially support much more complex features and optimizations that are not feasible within the protozoa framework itself.

This project is very immature so don't use it for anything.
