// If you are using webpack or a bundler, import it
// import metazoa from './metazoa';

// However you can also just grab it from the global scope
var metazoa: any = metazoa || {};

var m = metazoa(<ul style="font-size:32px">
  <li>METAZOA</li>
  <li>is</li>
  <li>working</li>
  <li>now!</li>
</ul>);
document.body.appendChild(m);
