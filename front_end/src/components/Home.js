import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import "./Home.css";
import Nav from "./Nav";
import "./home_nav.css";

const homestyle = {
  backgroundImage:
    "linear-gradient(to right, #04080c, #071018, #0b1622, #0d1a2c, #111e36)",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

const Home = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <body>
      <Nav />
      <br />

      <div class="home_main">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -3000))}>
              <div class="grid-home-container">
                <div class="grid-home-item">
                  <img class="img_1" src={"/assets/donate now.gif"} />
                </div>

                <div class="grid-home-item">
                  <p>Your donated products can make a difference!</p>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -3000))}>
              <div class="grid-home-container">
                <div class="grid-home-item">
                  <p>You can donate clothes...</p>
                </div>

                <div class="grid-home-item">
                  <img class="img_2" src={"/assets/donate please.jpg"} />
                </div>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={2}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -3000))}>
              <div class="grid-home-container">
                <div class="grid-home-item">
                  <img class="img_1" src={"/assets/volunteers.jpg"} />
                </div>

                <div class="grid-home-item">
                  <p>or anything you'd like!</p>
                </div>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={3}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -3000))}>
              <div class="grid-home-container">
                <div class="grid-home-item">
                  <p>Buy the products you like!</p>
                </div>

                <div class="grid-home-item">
                  <img class="img_2" src={"/assets/commercial.gif"} />
                </div>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={4}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -3000))}>
              <div class="grid-home-container">
                <div class="grid-home-item">
                  <img class="img_1" src={"/assets/all your money.gif"} />
                </div>

                <div class="grid-home-item">
                  <p>The amount goes to the NGOs...</p>
                </div>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={5}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -3000))}>
              <div class="grid-home-container">
                <div class="grid-home-item">
                  <p>NGOs can prosper and help people!</p>
                </div>

                <div class="grid-home-item">
                  <img class="img_2" src={"/assets/many donors.gif"} />
                </div>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={6}>
            <Animator animation={batch(Fade(), Sticky())}>
              <div class="grid-home-container">
                <div class="grid-home-item">
                  <img class="img_1" src={"/assets/join us 2.gif"} />
                </div>

                <div class="grid-home-item">
                  <a class="btn" href="/register">
                    <span>Join us today!</span>
                  </a>
                </div>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage page={8}>
            <Animator animation={Sticky()}>
              <img class="img" src={"/assets/together.jpg"} />
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </body>
  );
};

export default Home;
