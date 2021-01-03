import { Vue, Component } from "vue-property-decorator";

import S from "./index.module.scss";

import { Container, Header, Aside, Main, Button } from "element-ui";

import AsideMenu from "@/components/menu"

Vue.use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Button);

@Component
export default class Home extends Vue {
  name = "Home";
  render() {
    return (
      <div class={S.container}>
        <el-container class={S.main_container}>
          <el-header class={S.header}>
            <div>
              <img src={require("@/assets/logo.png")} alt=""/>
              <span>空气质量检测系统</span>
            </div>
            <el-button>退出</el-button>
          </el-header>
          <el-container>
            <el-aside class={S.aside}>
              <AsideMenu />
            </el-aside>
            <el-main class={S.main}>
              <span>main</span>
            </el-main>
          </el-container>
        </el-container>
      </div>
    );
  }
}
