import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { ButtonsPage } from "#/Buttons";
import { ToggleButtonsPage } from "#/ToggleButtons";
import { CheckBoxsPage } from "#/CheckBoxs";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<ButtonsPage />} />
                    <Route path="toggle-buttons" element={<ToggleButtonsPage />} />
                    <Route path="check-boxs" element={<CheckBoxsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
