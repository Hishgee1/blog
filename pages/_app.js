import "@/styles/globals.css";
import Layout from "@/components/Layout"
import SearchProvider from "./provider/search-provider";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SearchProvider>
  )
}
