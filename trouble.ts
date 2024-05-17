import { Thing } from "./thing";
function foo(thing: Thing) {
  return thing.buzz;
}
var thing: Thing = {
  buzz: "hell",
  name: "hello",
};
foo(thing);
