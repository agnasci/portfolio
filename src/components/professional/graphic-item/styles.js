import styled from 'styled-components'

export const ItemArea = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ItemTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  align-self: flex-start;
  color: var(--white);
  margin-left: 5px;
`

export const PercentageBackground = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid var(--blue);
`

export const Percentage = styled.div`
  box-sizing: border-box;
  height: 25px;
  display: flex;
  align-items: center;
  background-color: var(--blue);
  border-radius: 8px;
`
