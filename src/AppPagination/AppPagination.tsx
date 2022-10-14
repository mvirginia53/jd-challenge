import { Box, Pagination } from '@mui/material';
import React from 'react';
import { FunctionComponent } from 'react';

interface AppPaginationProps {
	currentPage: any;
	total: any;
	setCurrentPage: (value: number) => void;
}

const AppPagination: FunctionComponent<AppPaginationProps> = ({
	currentPage,
	total,
	setCurrentPage,
}) => {
	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number): void =>
		setCurrentPage(value);

	return (
		<Box justifyContent={'center'} alignItems='center' display='flex' sx={{ margin: '20px, 0' }}>
			<Pagination defaultPage={1} count={total} page={currentPage} onChange={handlePageChange} />
		</Box>
	);
};

export default AppPagination;
