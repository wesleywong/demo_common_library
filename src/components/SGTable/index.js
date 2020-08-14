import React, { PureComponent, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, ButtonGroup, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import { useTable, useSortBy, useRowSelect, useExpanded, usePagination } from 'react-table';
import classnames from 'classnames';
import './style.scss';

const renderHeader = (column) => {
	let styles = {
		flex: column.width+' 0 auto',
		width: column.width+'px'
	};
	if (column.maxWidth && column.maxWidth <= 1000) {
		styles = {
			...styles,
			maxWidth: column.maxWidth+'px'
		};
	}
	let styleTh = classnames({
		'th': true,
		[column.headerClassName]: column.headerClassName,
		'th-sort': column.canSort,
		'th-sort-desc': column.isSorted && column.isSortedDesc,
		'th-sort-asc': column.isSorted && !column.isSortedDesc
	});
	let styleSort = classnames({
	   'th-inner-sort': column.canSort,
	   'th-inner-sort-desc': column.isSorted && column.isSortedDesc,
		 'th-inner-sort-asc': column.isSorted && !column.isSortedDesc
	});

	return (
		<div {...column.getHeaderProps(column.getSortByToggleProps())} style={{...styles}} className={styleTh}>
			<div className={styleSort}>
				{column.render('Header')}
			</div>
			{/*<div
        {...column.getResizerProps()}
        className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
      />*/}
		</div>
	);
};

const renderBodyColumn = (cell) => {
	let styleTd = classnames({
		'td': true
	});
	let styles = {
		flex: '100 0 auto',
		width: cell.column.width
	};
	if (cell.column.maxWidth && cell.column.maxWidth <= 1000) {
		styles = {
			...styles,
			maxWidth: cell.column.maxWidth+'px'
		};
	}
	return (
		<div {...cell.getCellProps()} className={styleTd} style={{...styles}}>{cell.render('Cell')}</div>
	);
};

function TableSG ({columns: userColumns, data, renderRowSubComponent, showPagination, userPageSize, updateSelectedItems, tableId}) {


	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		flatColumns,
		page,
		canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
		selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowPaths, expanded },
	} = useTable({
			columns: userColumns,
			data,
			initialState: { pageIndex: 0, pageSize: (userPageSize) ? userPageSize : 10 }
		},
		useSortBy, useRowSelect, useExpanded, usePagination
	);

	/* update selected checkbox item */
	useEffect(() => {
		if (updateSelectedItems) {
			updateSelectedItems(selectedFlatRows, tableId);
		}
	}, [selectedRowPaths.length]);
	return (
		<div className="sg-react-table">
			{/*{ showPagination && <p>Selected Rows: {selectedRowPaths.length}</p> }*/}
			<div className="table-responsive">
				<div {...getTableProps()} className="table table-bordered">
					<div className="thead">
						{headerGroups.map((headerGroup, headerGroupKey) => (
							<div {...headerGroup.getHeaderGroupProps()} key={'headergroup_'+headerGroupKey} className="tr">
								{headerGroup.headers.map((column, columnKey) => (
									<React.Fragment key={'header_'+columnKey}>
										{renderHeader(column)}
									</React.Fragment>
								))}
							</div>
						))}
					</div>
					<div {...getTableBodyProps()} className="tbody">
						{page.map(
							(row, i) =>
								prepareRow(row) || (
									<React.Fragment key={'row_'+i}>
										<div {...row.getRowProps()} className={classnames({'tr':true, 'tr-selected': row.isSelected})}>
											{row.cells.map((cell, cellKey) => {
												return (
													<React.Fragment key={'cell_'+cellKey}>
														{renderBodyColumn(cell)}
													</React.Fragment>
												);
											})}
										</div>

										{row.isExpanded ? (
		                    <div className="tr">
		                      <div colSpan={flatColumns.length} className="td">
		                        {/*
		                          Inside it, call our renderRowSubComponent function. In reality,
		                          you coul pass whatever you want as props to
		                          a component like this, including the entire
		                          table instance. But for this example, we'll just
		                          pass the row
		                        */}
		                        {renderRowSubComponent({ row })}
		                      </div>
		                    </div>
		                  ) : null}
									</React.Fragment>
								)
						)}
					</div>
				</div>
			</div>
			{ (showPagination && data.length > 10) && (
				<div className="pagination clearfix">
					<InputGroup>
						<InputGroupAddon addonType="prepend">
							<Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} size="xs">
								<i className="material-icons">first_page</i>
							</Button>
							<Button onClick={() => previousPage()} disabled={!canPreviousPage} size="xs">
								<i className="material-icons">chevron_left</i>
							</Button>
						</InputGroupAddon>
						<Label className="middle">
							<span>
								Page {' '}
								<input
									type="number"
									defaultValue={pageIndex + 1}
									onChange={e => {
										const page = e.target.value ? Number(e.target.value) - 1 : 0;
										gotoPage(page);
									}}
									style={{ width: '50px' }}
									className="m-r-5"
								/>
								of {pageOptions.length}
							</span>{' '}
							<select
								className="m-l-5"
								value={pageSize}
								onChange={e => {
									setPageSize(Number(e.target.value));
								}}
							>
								{[5, 10, 20, 30, 40].map(pageSize => (
									<option key={pageSize} value={pageSize}>
										Show {pageSize}
									</option>
								))}
							</select>
						</Label>
						<InputGroupAddon addonType="append">
							<Button onClick={() => nextPage()} disabled={!canNextPage} size="xs">
								<i className="material-icons">chevron_right</i>
							</Button>
							<Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} size="xs">
								<i className="material-icons">last_page</i>
							</Button>
						</InputGroupAddon>
					</InputGroup>
	      </div>
			)}
		</div>
	);
}
TableSG.propTypes = {
	columns: PropTypes.any,
	data: PropTypes.any,
	renderRowSubComponent: PropTypes.any,
	showPagination: PropTypes.bool,
	userPageSize: PropTypes.number,
	updateSelectedItems: PropTypes.any,
	tableId: PropTypes.any,
};

export default TableSG;
