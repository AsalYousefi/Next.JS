// import styles from "./page.module.css";
import Header from "./Header";

export default function Home() {
  return (
    <div className="homepage-bg h-full">
      <Header />
      <main>
        <div className="container">
          <div className="d-flex flex-column flex-xl-row text-center">
            <div>
              <p className="text-uppercase fw-light text-muted">so, you want to travel to</p>
              <h1 className="text-uppercase w-75">space</h1>
              <p className="fw-light">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back. and relax because well give you a truly out
                of this world experience!
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}
