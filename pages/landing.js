import Services from "../components/services";
import Promos from "../components/promos";
import Footer from "../components/footer";
import SigninPage from "./signin";

export default function Landing() {
  return (
    <>
      <div
        className='jumbotron-fluid hero'
        style={{ padding: "2em" }}>
        <style jsx>{`
          .hero {
            color: white;
            background-image: url("https://images.unsplash.com/photo-1438109491414-7198515b166b?q=80&fm=jpg&s=cbdabf7a79c087a0b060670a6d79726c");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 55vh;
          }
        `}</style>
        <div className='container-fluid'>
          <div className='row justify-content-between'>
            <div className='col-sm-6'>
              <h1 className='display-4'>Welcome To Your Future</h1>
              <button type='button'>Button</button>
            </div>
            <div className='col-sm-4'>
              <SigninPage />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Promos />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
