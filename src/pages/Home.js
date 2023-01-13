import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import main from "../assets/main.svg";
import { useGlobalContext } from "../context/appContext";
import logo from "../assets/logo.svg";
function Home() {
  const { user } = useGlobalContext();

  return (
    <>
      {user && <Navigate to="/dashboard" />}
      <Wrapper>
        <nav>
          <img src={logo} alt="jobs app" />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>job tracking app</h1>
            <p>
              Welcome to job tracking app here you can create your job update
              your job and delete your job .
            </p>

            <Link to="/register" className="btn hero-btn">
              Login / Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .container {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Home;
