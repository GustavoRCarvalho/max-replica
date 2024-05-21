import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import useWindowDimensions from "./windowDimentions"
import { useRef, useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { RxDotsVertical } from "react-icons/rx"

export const Catalog = ({ title = "", content = [] }) => {
  const [isHover, setIsHover] = useState("0")
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const { width } = useWindowDimensions()
  function slidesPerView(width) {
    if (width < 1100) return 4
    else if (width < 1800) return 6
    else return 8
  }

  function spaceBetween(width) {
    if (width < 600) return 8
    else if (width < 800) return 12
    else if (width < 1100) return 16
    else return 20
  }

  return (
    <CatalogContainer
      onMouseLeave={() => setIsHover("0")}
      onMouseEnter={() => setIsHover("1")}
    >
      <CatalogTitle>{title}</CatalogTitle>
      <CardList
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        spaceBetween={spaceBetween(width)}
        slidesPerView={slidesPerView(width)}
        slidesPerGroup={slidesPerView(width)}
        modules={[Navigation]}
      >
        {content.map(({ src }) => {
          return (
            <Card>
              <CardImage src={src} alt={"image"} />
              <DotsVerticalIcon />
            </Card>
          )
        })}
        <SwiperButton ishover={isHover} left ref={navigationPrevRef}>
          <LeftIcon />
        </SwiperButton>
        <SwiperButton ishover={isHover} right ref={navigationNextRef}>
          <RightIcon />
        </SwiperButton>
      </CardList>
    </CatalogContainer>
  )
}

const CatalogContainer = styled.div`
  position: relative;
`

const CatalogTitle = styled.h2`
  font-size: 1.06em;

  margin-left: var(--margin-left);
`

const CardList = styled(Swiper)`
  width: 100%- var(--margin-left) * 2;
  padding-inline: var(--margin-left);

  .swiper-button-prev::after {
    color: white;
  }
`

const Card = styled(SwiperSlide)`
  position: relative;
  aspect-ratio: 2/3;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;

  padding: 2px;
  border: 2px solid transparent;
  border-radius: 4px;
  &:hover {
    border: 2px solid #fff;
  }

  transition: border 150ms;
  cursor: pointer;
  user-select: none;
`

const SwiperButton = styled.button`
  position: absolute;

  background: linear-gradient(
    ${(props) => (props.left ? "0.25turn" : "0.75turn")},
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0)
  );
  height: 99%;
  width: 4em;

  border: none;

  top: 0;
  right: ${(props) => (props.right ? "0" : "auto")};
  left: ${(props) => (props.left ? "0" : "auto")};

  padding: 0;

  opacity: ${(props) => props.ishover};
  transition: opacity 200ms;
  cursor: pointer;
  z-index: 1;

  &:disabled {
    display: none;
  }
  &:hover {
    svg {
      stroke-width: 0.65;
      color: #ffffff;
    }
  }
`

const RightIcon = styled(BsChevronRight)`
  height: 24px;
  width: 24px;
  stroke-width: 0.4;

  color: #ffffffdd;
`

const LeftIcon = styled(BsChevronLeft)`
  height: 24px;
  width: 24px;
  stroke-width: 0.4;

  color: #ffffffdd;
`

const DotsVerticalIcon = styled(RxDotsVertical)`
  position: absolute;
  top: 12px;
  right: 0;

  height: 1.25em;
  width: 1.25em;
  stroke-width: 0;

  color: #ffffffdd;
  cursor: pointer;

  &:hover {
    stroke-width: 0.65;
    color: #ffffff;

    box-shadow: 5px -5px 40px 0.4px black,
      inset -1.25em -1.25em 0px 1px #00000022;
    filter: drop-shadow(10px -10px 5px #000);
  }
`
