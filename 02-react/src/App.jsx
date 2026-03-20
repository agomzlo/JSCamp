import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./pages/Home.jsx";
import { EmploymentPage } from "./pages/Employment.jsx";
import { Route } from "./components/Route.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Route path="/" component={HomePage} />
        <Route path="/employment" component={EmploymentPage} />
      </main>
      <Footer />
    </>
  )
}

export default App
