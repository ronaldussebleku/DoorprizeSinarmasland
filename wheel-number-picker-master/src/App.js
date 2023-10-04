import React from "react";
import { Toaster } from "react-hot-toast";

import WheelContent from "./components/WheelContent";

const App = () => {
  return (
    <div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
        }}
      />
      <WheelContent />
    </div>
  );
};

export default App;
