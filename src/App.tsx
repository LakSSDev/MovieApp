
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home_page";
import MainLayout from "./pages/Layout_page";
import { Movie_page } from "./pages/Movie_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie" element={<Movie_page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
 <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />*/