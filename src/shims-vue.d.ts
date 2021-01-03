declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// scss支持
declare module "*.scss";

declare module "*.moduel.scss" {
  const content: { [className: string]: string };
  export default content
}
