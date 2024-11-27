import MyProvider from "./pages/UploadPage";
import MainLayout from "./layouts/MainLayout"
import DownloadPage from "./pages/DownloadPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MyProvider isRoute={true} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Route>
    )
  );

  return (
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
  );
}

export default App
