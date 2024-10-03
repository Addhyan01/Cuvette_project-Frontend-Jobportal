import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddJob, EditJob, JobDetail, JobList, Login, Register, NoteFoundPgae } from './pages';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/editjob" element={<EditJob />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path= "*" element={<NoteFoundPgae />} />
        <Route path="/list" element={<JobList />} >
          <Route index element={<JobList />}/>
          <Route path=":id" element={<JobDetail />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}