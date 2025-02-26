import { React } from "react";
import Form from "./components/registrationForm.jsx";

function App() {
  return (
    <div className="h-screen w-screen bg-[url('../public/bg.avif')] bg-cover flex items-center justify-center">
      <Form />
    </div>
  );
}

export default App;