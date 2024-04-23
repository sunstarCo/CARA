let body = window.parent.document.body;
let jsScriptNode = document.createElement('script');
jsScriptNode.setAttribute('type', 'text/javascript');
jsScriptNode.setAttribute('src', 'https://connect.podium.com/widget.js#ORG_TOKEN=24659e29-032e-42bd-9ade-29bf1f4c99df');
jsScriptNode.setAttribute('id', 'podium-widget');
jsScriptNode.setAttribute('data-organization-api-token', '24659e29-032e-42bd-9ade-29bf1f4c99df');
body.appendChild(jsScriptNode);

let start = Date.now();
let interval = 9;

function main() {
  let body = document.body;
  if (body) {
    insertJS();
  } else if (Date.now() - start > 10000) {
    return null;
  } else {
    setTimeout(function () {
      main();
    }, interval);
    interval *= 2;
  }
}
main();
