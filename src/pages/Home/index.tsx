import React from 'react'
import LogoVertical from '../../assets/LETSWATER LOGO VERTICAL-150923-V1.png'
import TwoBottles from '../../assets/AF_LETSWATHER_3D_EMBALAGEM_01_150923_V7.png'
import LogoAcronym from '../../assets/LETSWATER LOGO SIGLAS-150923-V1.png'
import MiniBottle from '../../assets/AF_LETSWATHER_3D_EMBALAGEM_01_150923_V1.png'
import LogoHori from '../../assets/LETSWATER LOGO HORIZONTAL-150923-V1.png'

import Carbon from '../../assets/SELOCARBONO.png'
import FSC from '../../assets/SELOFSC.png'
import Tetra from '../../assets/SELOTETRA.png'

import {
  Container,
  Content,
  Logo,
  Title,
  GoalsContent,
  ImageCombo,
  SmallText,
  BigText,
  LogoCombo,
  Market,
  LetsGoTag,
  SquareCombo,
  Square,
  Seal,
} from './styles'

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <LogoCombo>
            <Logo>
              <img src={LogoVertical} alt="" />
            </Logo>
            <img src={TwoBottles} alt="" />
          </LogoCombo>
          <Title>
            Uma{' '}
            <strong>
              Solução
              <br /> de mídia
            </strong>{' '}
            consciente
          </Title>
        </Content>
        <Seal>
          <img
            src={FSC}
            alt=""
            style={{ height: '5rem', marginRight: '1rem' }}
          />
          <img
            src={Tetra}
            alt=""
            style={{ height: '5rem', marginRight: '1rem' }}
          />
          <img src={Carbon} alt="" style={{ height: '5rem' }} />
        </Seal>
      </Container>
      <GoalsContent>
        <div>
          <ImageCombo>
            <img src={LogoAcronym} alt="" />
            <img src={MiniBottle} alt="" />
          </ImageCombo>
          <SmallText>
            A <strong> Let&apos;s Water </strong> oferece <br /> uma{' '}
            <strong>oportunidade única </strong>
            <br />
            para os anunciantes alcançarem <br /> seu público-alvo de maneira{' '}
            <br />
            eficaz e envolvente.
          </SmallText>
        </div>
        <BigText>
          Com uma distribuição gratuita em locais estratégicos e uma presença
          impactante, sua mensagem terá uma visibilidade excepcional.
          <br />
          Além disso, nossa capacidade de segmentação permite que você direcione
          sua mensagem exatamente para aqueles que mais importam para o seu
          negócio.
          <br />
          Com a Let&apos;s Water, você pode aproveitar os benefícios de uma
          mídia tradicional, combinados com a inovação de um novo formato.
          <br />A exposição frequente e prolongada dos anúncios garantirá que
          sua marca seja lembrada e se destaque da concorrência.
        </BigText>
      </GoalsContent>
      <Market>
        <LetsGoTag>
          <p>Let&apos;s Go ?</p>
        </LetsGoTag>
        <img src={LogoHori} alt="" />
        <SquareCombo>
          <Square>01</Square>
          <Square>02</Square>
          <Square>03</Square>
        </SquareCombo>
      </Market>
    </>
  )
}
