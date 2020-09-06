import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectLinks,
  upvoteLink,
  downVoteLink,
  removeLink,
  sortByChoice,
} from "../features/linkList/linkSlice";
import {
  selectPages,
  goPrevPage,
  goNextPage,
  goClickedPage,
} from "../features/pagination/paginationSlice";

import { sortLinks, paginateContent } from "../util/helpers";
import SubmissionBox from "../components/SubmissionBox";
import Divider from "../components/Divider";
import SortSelection from "../components/SortSelection";
import LinkList from "../components/LinkList";
import PaginationList from "../components/PaginationList";
import BeneathSection from "../components/BeneathSection";

const LinkVote = () => {
  const linkList = useSelector(selectLinks);
  const pagination = useSelector(selectPages);
  const sortedList = paginateContent(
    sortLinks(linkList),
    pagination.currentPage
  );

  const [isOpen, setIsOpen] = useState({});
  const openAlert = (id) => {
    setIsOpen({ ...isOpen, [id]: true });
  };
  const closeAlert = (id) => {
    setIsOpen({ ...isOpen, [id]: false });
  };
  return (
    <>
      <SubmissionBox />
      <Divider />
      <BeneathSection>
        <SortSelection sortByChoice={sortByChoice} />
        <LinkList
          sortedList={sortedList}
          upvoteLink={upvoteLink}
          downVoteLink={downVoteLink}
          openAlert={openAlert}
          closeAlert={closeAlert}
          removeLink={removeLink}
          isOpen={isOpen}
        />
        <PaginationList
          sortedList={linkList?.links}
          currentPage={pagination.currentPage}
          goPrevPage={goPrevPage}
          goClickedPage={goClickedPage}
          goNextPage={goNextPage}
        />
      </BeneathSection>
    </>
  );
};

export default LinkVote;
