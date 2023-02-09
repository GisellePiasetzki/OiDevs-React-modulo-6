import styled from "styled-components";
import {Text} from "../../ui/text";

export const Wrapper = styled.div`
  display: flex;
  margin: 40px 0;
  gap: 30px;
`;

export const HighlighItem = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  width: 100px;
`;

export const HighlightText = styled(Text)`
  margin-top: 12px;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`;
