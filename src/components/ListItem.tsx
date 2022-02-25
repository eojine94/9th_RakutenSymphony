import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from "react-router";
import useDateFormat from "shared/hooks/useDateFormat";
import styled from "styled-components";
import colors from "styles/colors";
import filesize from "filesize";
import { LinkData } from "shared/types";
import Avatar from "./Avatar";

const formatingFileSize = filesize.partial({ base: 2, standard: "jedec" });

const ListItem = ({ itemData }: { itemData: LinkData }) => {
  const navigate = useNavigate();
  const url = `localhost:3000/${itemData.key}`;
  const isExistDownload = itemData.download_count > 0;
  const isExpired =
    useDateFormat(itemData.expires_at, "EXPIRE") === "만료되었습니다.";

  const goToDetailPage = () => {
    navigate(`/${itemData.key}`);
  };

  const urlAlert = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    isExpired ? "" : alert(`${url} 주소가 복사되었습니다.`);
  };

  return (
    <TableRow onClick={() => goToDetailPage()}>
      <TableCell>
        <LinkInfo>
          <LinkImage>
            <img referrerPolicy="no-referrer" src="/svgs/default.svg" alt="" />
          </LinkImage>
          <LinkTexts>
            <LinkTitle>로고파일</LinkTitle>
            <CopyToClipboard text={url}>
              <LinkUrl onClick={urlAlert}>{isExpired ? "만료됨" : url}</LinkUrl>
            </CopyToClipboard>
          </LinkTexts>
        </LinkInfo>
        <span />
      </TableCell>
      <TableCell>
        <span>파일개수</span>
        <span>{itemData.count.toLocaleString("ko-KR")}</span>
      </TableCell>
      <TableCell>
        <span>파일사이즈</span>
        <span>{formatingFileSize(itemData.size)}</span>
      </TableCell>
      <TableCell>
        <span>유효기간</span>
        <span>{useDateFormat(itemData.expires_at, "EXPIRE")}</span>
      </TableCell>
      <TableCell>
        <span>받은사람</span>
        <LinkReceivers>
          {isExistDownload && <Avatar text="recruit@estmob.com" />}
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
