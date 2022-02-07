import { Redirect, Route } from "react-router-dom";
import CoachDetail from "./pages/CoachDetail";
import Header from "./components/Header";
import Coaches from "./pages/coaches";
import Requests from "./pages/requests";
import NewCoach from "./pages/NewCoach";
import Layout from "./components/UI/Layout";
function App() {
  return (
    <div>
      <Header />
      <Layout>
      <main>
        <Route path="/" exact>
          <Redirect to="/coaches" />
        </Route>
        <Route path="/coaches" exact>
          <Coaches />
        </Route>
        <Route path="/new-coach" exact>
          <NewCoach />
        </Route>
        <Route path="/coaches/:id">
          <CoachDetail />
        </Route>
        <Route path="/requests">
          <Requests />
        </Route>
      </main>
      </Layout>
    </div>
  );
}

export default App;
