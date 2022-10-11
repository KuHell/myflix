import AppLoading from "expo-app-loading";
import React, { useState } from "react";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  if (!ready) {
    return <AppLoading onFinish={onFinish} onError={console.error} />;
  }
  return null;
}

// export default function App() {
//   const [ready, setReady] = useState(false);
//   const onFinish = () => setReady(true);
//   if (!ready) {
//     return <AppLoading onFinish={onFinish} onError={console.error} />;
//   }
//   return null;
// }
