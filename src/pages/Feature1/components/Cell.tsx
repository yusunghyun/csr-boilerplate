import styled from '@emotion/styled';
import { VFC } from 'Common/utils';
import Mole from 'assets/images/mole.png';
import Soil from 'assets/images/soil.png';
import Mouse from 'assets/images/mouse.png';
import Gold from 'assets/images/gold.png';
import { keyframes, Keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

const CHARACTER_SIZE = 80;

interface Props {
  trigger: boolean;
  duration: number;
  onClick: () => void;
}

export const Cell: VFC<Props> = ({ duration = 3000, onClick, trigger }) => {
  const [isShowed, setIsShowed] = useState<boolean>(false);

  useEffect(() => {
    setIsShowed(true);

    const timer = window.setTimeout(() => setIsShowed(false), duration);

    return (): void => window.clearTimeout(timer);
  }, [duration, trigger]);

  return (
    <>
      <Wrapper>
        <Image src={Mole} isShowed={isShowed} />
        <Image2 src={Soil} />
      </Wrapper>
      <Wrapper>
        <Image src={Gold} isShowed={isShowed} />
        <Image2 src={Soil} />
      </Wrapper>
      <Wrapper>
        <Image src={Mouse} isShowed={isShowed} />
        <Image2 src={Soil} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: ${CHARACTER_SIZE}px;
  height: ${CHARACTER_SIZE}px;

  position: relative;
  z-index: 1;

  overflow: hidden;
  background-color: white;
`;

const Image2 = styled.img`
  width: ${CHARACTER_SIZE}px;
  height: ${CHARACTER_SIZE / 4}px;
  margin-top: ${(CHARACTER_SIZE * 3) / 4}px;
`;

const Image = styled.img<{ isShowed: boolean }>`
  width: ${CHARACTER_SIZE}px;
  height: ${CHARACTER_SIZE}px;
  position: absolute;
  z-index: 2;
  animation: ${({ isShowed }): Keyframes =>
      isShowed ? appearAnimation() : disappearAnimation()}
    500ms ease-in-out;
`;

const appearAnimation = (): Keyframes => keyframes`
    from {
      bottom: -${CHARACTER_SIZE}px;
    }
  
    to {
      bottom: 0px;
    }
`;

const disappearAnimation = (): Keyframes => keyframes`
  from {
    bottom: 0px;
  }

  to {
    bottom: -${CHARACTER_SIZE}px;
  }
`;
