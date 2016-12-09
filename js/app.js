"use strict";

ReactDOM.render(
  React.createElement('div', {id: 'vis'}),
  document.getElementById('root')
);

var vlSpec = JSON.parse(Get('./vgl_spec.json'));

var embedSpec = {
    mode: "vega-lite",
    spec: vlSpec
  };

vg.embed("#vis", embedSpec, function(error, result) {});
