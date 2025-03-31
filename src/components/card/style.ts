import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);

    > div {
      opacity: 1;
    }

    > div:last-child {
      transform: translateY(0);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 10%,
    rgba(0, 0, 0, 0) 50%
  );
  opacity: 0;
  transition: opacity 0.3s;
`;

export const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
  padding: 10px;
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s;
`;

export const Synopsis = styled.p`
  padding-top: 4px;
  font-size: 12px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
`;

export const Avible = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
`;
