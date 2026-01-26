import * as S from './style';

const Sidebar = () => {
  return (
    <S.Container>

      <S.MenuItem className='active'>
        <S.MenuIcon src="/icons/home.png" alt="홈" />
        <S.MenuText>홈</S.MenuText>
      </S.MenuItem>

      <S.MenuItem>
        <S.MenuIcon src="/icons/shorts.png" alt="Shorts" />
        <S.MenuText>Shorts</S.MenuText>
      </S.MenuItem>

      <S.MenuItem>
        <S.MenuIcon src="/icons/subscription.png" alt="구독" />
        <S.MenuText>구독</S.MenuText>
      </S.MenuItem>

    </S.Container>
  )
}

export default Sidebar