import { Route, Routes } from "react-router-dom";
import Topbar from "./pages/layout/Topbar";
import MainSidebar from "./pages/layout/MainSidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team/Team";
import Invoices from "./pages/invoices/Invoices";
import Contacts from "./pages/contacts/Contacts";
import Bar from "./pages/bar/Bar";
import Form from "./pages/form/Form";
import MyCalendar from "./pages/calendar/Calendar";
import Line from "./pages/line/Line";
import Pie from "./pages/pie/Pie";
import FAQ from "./pages/faq/Faq";
import Geography from "./pages/geography/Geography";
import { useState } from "react";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <MainSidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<MyCalendar />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
