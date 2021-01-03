import { Vue, Component } from "vue-property-decorator";
import "./app.scss";

@Component
class App extends Vue {
  name = "App";

  render() {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}

export default App;
