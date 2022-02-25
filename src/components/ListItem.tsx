import filesize from "filesize";
import React from "react";
import { useNavigate } from "react-router";
import { LinkData } from "shared/types";
import { formattingExpireDate } from "shared/utils";
import styled from "styled-components";
import colors from "styles/colors";
import Avatar from "./Avatar";

const ListItem = ({ itemData }: { itemData: LinkData }) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/detailpage/${itemData.key}`);
  };

  const formatingFileSize = filesize.partial({ base: 2, standard: "jedec" });

  return (
    <TableRow onClick={() => goToDetailPage()}>
      <TableCell>
        <LinkInfo>
          <LinkImage>
            <img referrerPolicy="no-referrer" src="/svgs/default.svg" alt="" />
          </LinkImage>
          <LinkTexts>
            <LinkTitle>로고파일</LinkTitle>
            <LinkUrl>localhost/{itemData.key}</LinkUrl>
          </LinkTexts>
        </LinkInfo>
        <span />
      </TableCell>
      <TableCell>
        <span>파일개수</span>
        <span>{itemData.count}</span>
      </TableCell>
      <TableCell>
        <span>파일사이즈</span>
        <span>{formatingFileSize(itemData.size)}</span>
      </TableCell>
      <TableCell>
        <span>유효기간</span>
        <span>{formattingExpireDate(itemData.expires_at)}</span>
      </TableCell>
      <TableCell>
        <span>받은사람</span>
        <LinkReceivers>
          <Avatar text="recruit@estmob.com" />
        </LinkReceivers>
      </TableCell>
    </TableRow>
  );
};

const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
  font-weight: inherit;
  font-size: inherit;
`;

const TableCell = styled.th`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: left;
  padding: 16px;
`;

const LinkInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LinkImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
  }
`;

const LinkTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  & > * {
    margin: 0;
  }
`;

const LinkTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey700};
`;

const LinkUrl = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.teal700};
  }
`;

const LinkReceivers = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;

export default ListItem;
