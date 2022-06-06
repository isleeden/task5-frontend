import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import MessagePage from "./pages/MessagePage";
import SendMessage from "./pages/SendMessage";

const Router = ({ name, setName }) => {
  return (
    <BrowserRouter>
      <Routes>
        {name ? (
          <>
            <Route path="/" element={<Home name={name} setName={setName} />} />
            <Route path="/:id" element={<MessagePage />} />
            <Route path="/send" element={<SendMessage author={name}/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginForm submitName={setName} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
