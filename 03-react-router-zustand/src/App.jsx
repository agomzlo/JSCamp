import { lazy, Suspense } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Routes, Route } from "react-router";
import { Loading } from "./components/Loading.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const EmploymentPage = lazy(() => import("./pages/Employment.jsx"));
const JobInfoPage = lazy(() => import("./pages/Info.jsx"));
const ProfilePage = lazy(() => import("./pages/Profile.jsx"));
const LoginPage = lazy(() => import("./pages/Login.jsx"));
const RegisterPage = lazy(() => import("./pages/Register.jsx"));
const NotFoundPage = lazy(() => import("./pages/404.jsx"));

function App() {


  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employment" element={<EmploymentPage />} />
          <Route path="/job/:jobId" element={<JobInfoPage />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
