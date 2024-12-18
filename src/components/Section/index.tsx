import * as S from './srtyles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.Title>{title}</S.Title>
      {children}
    </div>
  </S.Container>
)

export default Section
