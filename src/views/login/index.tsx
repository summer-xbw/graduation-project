import { Vue, Component } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  name = "Login";
  render() {
    return <div>登录界面</div>;
  }
}
