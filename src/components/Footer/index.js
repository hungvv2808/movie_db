import { Wrapper, Content, Image } from "./Footer.styles";
import Parker from "../../images/parker.jpg";

const Footer = () => (
  <Wrapper>
    <Content>
      <div className="info">
        <h1>About The Movie DB</h1>
        <div className="info-author">
          <p>
            This website get data from The Movie Database (TMDB) via API, this
            is a community built movie and TV database. Every piece of data has
            been added by our amazing community dating back to 2008. TMDb's
            strong international focus and breadth of data is largely unmatched
            and something we're incredibly proud of. Put simply, we live and
            breathe community and that's precisely what makes us different.
          </p>
        </div>
      </div>
    </Content>
    <Content>
      <Image src={Parker}></Image>
    </Content>
    <Content>
      <div className="info">
        <h1>Desinged by Parker</h1>
        <div className="info-author">
          <p>
            This website is designed by Parker with ReactJS. You can check the
            rating and movie detail here. If you have any questions or concerns
            I am more than happy to support you. Please contact me via email:
            <a href="mailto:vuhung2881999@gmail.com">vuhung2881999@gmail.com</a>
          </p>
        </div>
        <h1>Follow me</h1>
        <div className="info-public">
          <a href="https://www.facebook.com/hungvv2808" target="_blank">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.instagram.com/hngvx.28" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="https://github.com/hungvv2808" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
    </Content>
  </Wrapper>
);

export default Footer;
