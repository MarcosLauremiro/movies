import styled from "styled-components";
import { Container } from "../container/style";

export const DetailContainer = styled(Container)`
  position: relative;
  padding: 2rem 1rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Backdrop = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.15;
  z-index: -1;
  filter: blur(4px);
`;

export const MovieHeader = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const MoviePoster = styled.div`
  flex: 0 0 350px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.cardBg};

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 2/3;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex: 1;
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const MovieInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text};

    span {
      font-weight: 400;
      opacity: 0.8;
      font-size: 0.8em;
    }
  }
`;

export const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .MuiRating-root {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Tagline = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
`;

export const Overview = styled.p`
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 3rem 0 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const InfoItem = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h4 {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  p {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-size: 1rem;
  }
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;

  li {
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 0.8rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border: 1px solid ${({ theme }) => theme.colors.cardBg};
    }

    h5 {
      margin: 0.3rem 0;
      font-size: 0.95rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }

    p {
      font-size: 0.85rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 0;
    }
  }
`;

export const SimilarMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;

  li {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      img {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }
    }

    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 0.8rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      aspect-ratio: 2/3;
    }

    h5 {
      font-size: 0.95rem;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-bottom: 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: ${({ theme }) => theme.colors.cardBg};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }
`;
