import styled from "styled-components";
import { memo, useState } from "react";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.ul`
    min-width: 100%;

    display: flex;
    flex-wrap: wrap;
  `,
  Tab: styled.li`
    padding: 1rem;
    margin: 0.5rem;

    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
    font-size: 1rem;

    color: ${({ theme }) => theme.color.subBlack};
    border: 1.5px solid ${({ theme }) => theme.color.subBlack};
    border-radius: 9999px;
    cursor: pointer;

    transition: all ease-in-out 0.25s;

    &:hover {
      background-color: #eeeeee;
    }

    &.selected {
      background-color: ${({ theme }) => theme.color.subBlack};
      color: ${({ theme }) => theme.color.white};
    }
  `,
};

/**
 * Tabs 공통 컴포넌트
 * @param tabInfoArray title과 func 정보를 객체로 담은 정보 배열
 * @param tabStyle 기존 style과 동일
 * @param props 기타 props
 */

function Tabs({ tabInfoArray, tabStyle, ...props }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Styled.Container {...props}>
      {tabInfoArray.map((tab, index) => (
        <Styled.Tab
          value={index}
          onClick={(event) => {
            if (selectedTab === event.target.value) return;
            setSelectedTab(event.target.value);
            tab.func();
          }}
          className={selectedTab === index && "selected"}
          key={index}
          style={tabStyle}
        >
          {tab.title}
        </Styled.Tab>
      ))}
    </Styled.Container>
  );
}

Tabs.propTypes = {
  tabInfoArray: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, func: PropTypes.func }),
  ).isRequired,
  tabStyle: PropTypes.object,
};

export default memo(Tabs);
