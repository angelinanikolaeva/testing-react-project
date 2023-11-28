import { memo, Suspense } from "react";
import { AppRouter } from "./providers/router";
import { NavBar } from "@/widgets/NavBar";
import { MainLayout } from "@/shared/layouts/MainLayout";

const App = memo(() => {
  return (
    <div id="app" className="App">
      <Suspense fallback="">
        <MainLayout
          header={<NavBar />}
          content={<AppRouter />}
        />
      </Suspense>
    </div>
  );
});

export default App;
