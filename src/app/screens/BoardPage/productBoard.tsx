import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Container,
} from "@mui/material";

const fixedData = [
  {
    id: 1,
    title: "강남도매시장 홍보 전단지 사연 안내입니다.",
    owner: "짱다시망국",
    date: "2020-03-30",
    views: 7,
  },
  {
    id: 2,
    title: "강남도매시장 상인 연락처",
    owner: "서리풀",
    date: "2020-03-26",
    views: 12,
  },
  {
    id: 3,
    title: "2020년 춘영일정표",
    owner: "서리풀",
    date: "2020-03-11",
    views: 84,
  },
  {
    id: 4,
    title: "강남도매시장(양산시장) 외부 및 내부모습",
    owner: "강남도매시장가",
    date: "2020-03-11",
    views: 85,
  },
  {
    id: 5,
    title: "주차장 찾기가 너무 불편합니다",
    owner: "주차장안내중",
    date: "2019-04-24",
    views: 599,
  },
  {
    id: 6,
    title: "주차장 찾기가 너무 불편합니다",
    owner: "서리풀",
    date: "2019-04-26",
    views: 441,
  },
  {
    id: 7,
    title: "2019년 강남도매시장 '마름휴가'",
    owner: "서리풀",
    date: "2019-04-14",
    views: 769,
  },
  {
    id: 8,
    title: "강남도매시장 [양산시장] 영업시간 및 입문메이순",
    owner: "서리풀",
    date: "2019-04-14",
    views: 1055,
  },
  {
    id: 9,
    title: "교육백수 수험준비 '생환' 전국 방송",
    owner: "서리풀",
    date: "2019-02-28",
    views: 682,
  },
  {
    id: 10,
    title: "강남도매시장 대차손실 의무신고 [공지사항]",
    owner: "서리풀",
    date: "2019-02-14",
    views: 404,
  },
  {
    id: 11,
    title: "주거일시 주차장옥(만) 주차확인해주세요^^",
    owner: "서리풀",
    date: "2019-02-11",
    views: 417,
  },
  {
    id: 12,
    title: "행사/국/카테고리 이미지/자료실",
    owner: "서리풀",
    date: "2019-02-11",
    views: 457,
  },
  {
    id: 13,
    title: "2019년 수도권 본거제 도메도내고^^ (일정변경) [2]",
    owner: "서리풀",
    date: "2019-02-09",
    views: 396,
  },
  {
    id: 14,
    title: "효성 벨트외 경로시설 연락처 공유 합니다.",
    owner: "서리풀",
    date: "2019-02-08",
    views: 323,
  },
  {
    id: 15,
    title: "드디어등록부활한것인가요?",
    owner: "한만찬",
    date: "2018-07-25",
    views: 782,
  },
];

const ProductBoard = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const displayedData = fixedData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Container className="container">
      <TableContainer component={Paper} className="table-container">
        <Table className="table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell className="table-cell-head">번호</TableCell>
              <TableCell className="table-cell-head">제목</TableCell>
              <TableCell className="table-cell-head">이름</TableCell>
              <TableCell className="table-cell-head">날짜</TableCell>
              <TableCell className="table-cell-head">조회수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedData.map((item, index) => (
              <TableRow key={item.id} className="table-row">
                <TableCell className="table-cell">
                  {index + 1 + (page - 1) * itemsPerPage}
                </TableCell>
                <TableCell className="table-cell">{item.title}</TableCell>
                <TableCell className="table-cell">{item.owner}</TableCell>
                <TableCell className="table-cell">
                  {new Date(item.date).toLocaleDateString()}
                </TableCell>
                <TableCell className="table-cell">{item.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(fixedData.length / itemsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        className="pagination"
      />
    </Container>
  );
};

export default ProductBoard;
