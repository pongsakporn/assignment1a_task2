import * as React from "react"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#909497',
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Head = () => <Seo title="รายชื่อวิชาที่เปิดสอน" />
const CoursesPage = () => {
  const data = useStaticQuery(graphql`
  query {
    directus {
      Member {
        id, StudentID, Name
      }
      Class {
        id, SubjectID, Subject, Date, Time
      }
    }
  }
  `);

  return (
    <Layout>
      <Seo title="Member" />
      <div className="container  my-5">
      <div className="container">
      <h1 align="center">รายวิชาทั้งหมดที่เปิดสอน</h1>
      <div className="table">
        <TableContainer componebt={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                  <StyledTableCell align="center">ลำดับวิชา</StyledTableCell>
                  <StyledTableCell align="center">รหัศนักศึกษา</StyledTableCell>
                  <StyledTableCell align="center">ชื่อวิชา</StyledTableCell>
                  <StyledTableCell align="center">วัน</StyledTableCell>
                  <StyledTableCell align="center">เวลา</StyledTableCell>
                </TableRow>
            </TableHead>

            <TableBody>
              { data.directus.Class.map((Class) => (
                <StyledTableRow key={Class.id}>
                  <StyledTableCell align="center"> { Class.id } </StyledTableCell>
                  <StyledTableCell align="center"> { Class.SubjectID } </StyledTableCell>
                  <StyledTableCell align="center"> { Class.Subject } </StyledTableCell>
                  <StyledTableCell align="center"> { Class.Date } </StyledTableCell>
                  <StyledTableCell align="center"> { Class.Time } </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
      <Link to="/">หน้าแรก</Link>
      </div>
    </Layout>
  )
}

export default CoursesPage