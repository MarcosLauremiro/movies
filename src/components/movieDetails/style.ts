import styled from "styled-components";
import { Container } from "../container/style";

export const DetailContainer = styled(Container)`
  position: relative;
  padding-top: 2rem;
  color: #000000;
`;

export const Backdrop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  z-index: -1;
`;

export const MovieHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MoviePoster = styled.div`
  flex: 0 0 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    flex: 1;
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const MovieInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;

    span {
      font-weight: normal;
      opacity: 0.8;
    }
  }
`;

export const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #000000;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Tagline = styled.p`
  font-style: italic;
  color: #000000;
  margin-bottom: 1.5rem;
`;

export const Overview = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: #000000;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const InfoItem = styled.div`
  h4 {
    font-size: 0.9rem;
    color: #000000;
    margin-bottom: 0.3rem;
  }

  p {
    font-weight: 500;
  }
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;

  li {
    text-align: center;

    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 0.5rem;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }

    h5 {
      margin: 0.3rem 0;
      font-size: 0.9rem;
    }

    p {
      font-size: 0.8rem;
      color: #000000;
      margin: 0;
    }
  }
`;

export const SimilarMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;

  li {
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 225px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 0.5rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    h5 {
      font-size: 0.9rem;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 8px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
