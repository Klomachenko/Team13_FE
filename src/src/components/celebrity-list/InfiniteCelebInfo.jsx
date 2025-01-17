import { useRef } from "react";
import { PropTypes } from "prop-types";
import { GridTemplate } from "@/styles/CommonStyle.js";
import { CelebInfoDto } from "@/api/dto/celebrity.dto";

import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import useInfiniteCelebInfoQuery from "@/hooks/api/celebrity/useInfiniteCelebInfoQuery";
import CelebInfoGridCard from "@/components/celebrity/CelebInfoGridCard.jsx";
import InfiniteCelebInfoLoader from "./InfiniteCelebInfo.loader.jsx";

/**
 * 셀럽 무한 목록 컴포넌트
 * @param {string} keyword 검색 키워드
 * @param {string} sortType 순서
 */

function InfiniteCelebInfo({ keyword, sortType }) {
  const loaderRef = useRef();

  const { data: infiniteCelebInfoData, fetchNextPage } =
    useInfiniteCelebInfoQuery({
      keyword,
      sortType,
    });

  useIntersectionObserver(async () => {
    await fetchNextPage();
  }, loaderRef);

  const mapInfoToCelebInfoDto = (info) => {
    return new CelebInfoDto({ ...info });
  };

  return (
    <>
      <GridTemplate>
        {infiniteCelebInfoData?.pages.map((page) =>
          page?.data?.celebList.map((info, index) => (
            <CelebInfoGridCard key={index} {...mapInfoToCelebInfoDto(info)} />
          )),
        )}
      </GridTemplate>
      <InfiniteCelebInfoLoader loaderRef={loaderRef} />
    </>
  );
}

InfiniteCelebInfo.propTypes = {
  keyword: PropTypes.string,
  sortType: PropTypes.string,
};

export default InfiniteCelebInfo;
