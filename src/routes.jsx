// routes.jsx

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./common/Header";
import { ThreadList } from "./common/ThreadList";
import { ThreadCreateScreen } from "./common/ThreadCreateScreen";
import { Post } from "./common/Post";

export function AppRoutes() {
  return (
    <BrowserRouter basebame="/app">
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />{" "}
        <Route path="thread/new" element={<ThreadCreateScreen />} />{" "}
        <Route path="thread/:thread_id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
