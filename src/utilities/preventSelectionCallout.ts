
export function preventGlobally() {
  var style:any = document.documentElement.style;
  style.webkitTouchCallout = "none";
  style.webkitUserSelect = "none";
}
