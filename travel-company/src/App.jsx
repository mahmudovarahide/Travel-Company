import "./assets/style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import Router from "./routers";
function App() {
  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
