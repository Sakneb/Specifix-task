import { PatientProvider } from "@/components/patients";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PatientProvider>
      <Component {...pageProps} />
    </PatientProvider>
  );
}
