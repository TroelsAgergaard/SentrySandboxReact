import "./Navbar";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import NotFound from "./NotFound";
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import { ThemeProvider } from "@emotion/react";

function App() {
  Sentry.init({
    dsn: "https://3b2dd6de475d4a189ff67c02bbac0b54@o350207.ingest.sentry.io/6190007",
    integrations: [new BrowserTracing()],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

  const theme = {
    colors: {
      primary: "limegreen",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
