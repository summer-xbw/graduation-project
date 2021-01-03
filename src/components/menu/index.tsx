import { Vue, Component } from "vue-property-decorator";

import { Menu, Submenu, MenuItemGroup, MenuItem } from "element-ui";

Vue.use(Menu)
  .use(Submenu)
  .use(MenuItem);

@Component
export default class AsideMenu extends Vue {
  name = "AsideMenu";

  render() {
    return (
      <div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>选项一</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    );
  }
}
