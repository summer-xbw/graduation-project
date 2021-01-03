import { Vue, Component } from "vue-property-decorator";

import S from "./index.module.scss";

import { Container, Header, Aside, Main } from "element-ui";

Vue.use(Container)
  .use(Header)
  .use(Aside)
  .use(Main);

@Component
export default class Home extends Vue {
  name = "Home";
  render() {
    return (
      <div class={S.container}>
        <el-container>
          <el-header class={S.header}>
            <span>header</span>
          </el-header>
          <el-container>
            <el-aside class={S.aside}>
              <span>aside</span>
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
