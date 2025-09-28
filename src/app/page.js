import Contact from "./components/contact";
import Download from "./components/download";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing";
import Questions from "./components/questions";
import ScrollTopBtn from "./components/ScrollTopBtn";


export default function Home() {
  return (
    <>
      <ScrollTopBtn></ScrollTopBtn>
      <Header></Header>
      <main>
        <Landing></Landing>
        <Features></Features>
        <Download></Download>
        <Questions></Questions>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}
