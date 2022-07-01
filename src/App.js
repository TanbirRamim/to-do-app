import FixCalendar from "./Page/FixCalendar";
import Home from "./Page/Home";
import Navbar from "./Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import CompleteTask from "./Page/CompleteTask";
import ToDo from "./Page/ToDo";
import EditTask from "./Page/EditTask";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="completed" element={<CompleteTask />} />
          <Route path="calendar" element={<FixCalendar />} />
          <Route path="toDo" element={<ToDo />} />
          <Route path="task/:taskId" element={<EditTask />} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
