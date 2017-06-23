// If you are using webpack or a bundler, import it
// import metazoa from './metazoa';

// However you can also just grab it from the global scope
var metazoa: any = metazoa || {};

var m = metazoa(<div style="font-size:32px">METAZOA</div>);
document.body.appendChild(m);
