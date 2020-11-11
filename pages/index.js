import { useState } from "react";
import OriginalCount from "../src/components/CountOriginal";
import CopyCount from "../src/components/copyCount";

import CountProvider from "../src/context/Count";

export default function Home() {
  return (
    <CountProvider>
      <OriginalCount />
      <hr />
      <CopyCount />
    </CountProvider>
  );
}
