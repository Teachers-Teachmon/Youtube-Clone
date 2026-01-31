import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;
export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 비율 */
  background-color: #000;
  border-radius: 12px;
  overflow: hidden;
`;
export const PlaceholderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
`;