import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

export const Catalog = ({ title = "", content = [] }) => {
  return (
    <CatalogContainer>
      <CatalogTitle>{title}</CatalogTitle>
      <CardList
        slidesPerView={"auto"}
        centeredSlides={false}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation]}
      >
        {content.map(({ src }) => {
          return (
            <Card>
              <CardImage src={src} alt={"image"} />
            </Card>
          )
        })}
      </CardList>
    </CatalogContainer>
  )
}

const CatalogContainer = styled.div``

const CatalogTitle = styled.h2`
  font-size: 1.06em;

  margin-left: var(--margin-left);
`

const CardList = styled(Swiper)`
  width: 100%;

  .swiper-slide:nth-child(1) {
    margin-left: var(--margin-left);
  }
  .swiper-slide:nth-last-child(1) {
    margin-right: var(--margin-left) !important;
  }
`

const Card = styled(SwiperSlide)`
  margin-left: 6px;
  margin-right: 6px;

  position: relative;
  width: calc(23%);
  aspect-ratio: 2/3;
`

const CardImage = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;
`
