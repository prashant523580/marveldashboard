import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";
interface Column {
    id: 'name' | 'description' | 'Comics' | 'Series' | 'Stories' | "Thumbnail";
    label: string;
    minWidth?: number;
    align?: 'right';
}

const columns: readonly Column[] = [
    { id: 'Thumbnail', label: 'Thumbnails', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 150 },
    { id: 'description', label: 'Description', minWidth: 170 },
];

export default function StickyHeadTable({ data }: { data: any[] }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer
                sx={{ maxHeight: 400 }}
            >
                <Table stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    // align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any, ind: number) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={ind}>

                                        <TableCell >
                                            <Link to={`/comic/${row.id}`}>
                                                <img alt={row.name} title={row.name} width={60} height={60} src={row.thumbnail.path + "." + row.thumbnail.extension} />

                                            </Link>
                                        </TableCell>
                                        <TableCell >
                                            {row.name}
                                        </TableCell>
                                        <TableCell >
                                            <span className='line-clamp-2'>
                                                {row.description}
                                            </span>
                                        </TableCell>
                                        {/* <TableCell >
                                            {row.comics.available}
                                        </TableCell>
                                        <TableCell >
                                            {row.stories.available}
                                        </TableCell>
                                        <TableCell >
                                            {row.series.available}
                                        </TableCell> */}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[20, 30, 50]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}