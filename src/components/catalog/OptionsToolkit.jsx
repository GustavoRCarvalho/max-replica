import { RxDotsVertical } from "react-icons/rx"
import { Tooltip } from "react-tooltip"
import styled from "styled-components"
import { BsPlusLg, BsInfoCircle } from "react-icons/bs"

export const OptionsToolkit = ({ isOpenOptions, setIsOpenOptions }) => {
  return (
    <>
      <DotsVerticalIcon
        data-tooltip-id="tooltip"
        onClick={() => setIsOpenOptions((state) => !state)}
      />
      <DotsToolkit id="tooltip" isOpen={isOpenOptions} noArrow>
        <DotsToolkitButton id="tooltip-button">
          <PlusIcon />
          <SpanToolkit>Adicione à Minha lista</SpanToolkit>
        </DotsToolkitButton>
        <DotsToolkitButton id="tooltip-button">
          <InfoIcon />
          <SpanToolkit>Mais informações</SpanToolkit>
        </DotsToolkitButton>
      </DotsToolkit>
    </>
  )
}

const PlusIcon = styled(BsPlusLg)`
  width: 1.25em;
  height: 1.25em;

  margin-right: 8px;
`

const InfoIcon = styled(BsInfoCircle)`
  width: 1.1em;
  height: 1.1em;

  margin-right: calc(8px + 0.075em);
  margin-left: 0.075em;
`

const SpanToolkit = styled.span``

const DotsToolkit = styled(Tooltip)`
  background-color: #191919 !important;
  border-radius: 0.5em !important;
  padding: 0 !important;

  display: flex;
  flex-direction: column;
  transition: 0s !important;
  pointer-events: all !important;

  box-shadow: rgb(0 0 0 / 0.1) 0px 2px 8px 0px;
`

const DotsToolkitButton = styled.button`
  background-color: transparent;
  color: #fff;

  display: flex;
  align-items: center;
  border: none;
  width: 100%;

  font-size: 13px;
  line-height: 21px;

  padding: 0.6em;
  margin-block: 0.4em;

  &:hover {
    background-color: #dddddd0f;
  }

  cursor: pointer;
`

const DotsVerticalIcon = styled(RxDotsVertical)`
  position: absolute;
  top: 10px;
  right: -0.2em;

  height: 1em;
  width: 1em;
  stroke-width: 0;
  padding-inline: 0.1em;

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
