import React, { PureComponent, useEffect } from 'react';
import styled from 'styled-components';

export const Styles = styled.div`
	.table {
	  flex: auto 1;
	  display: flex;
	  -webkit-box-orient: vertical;
	  flex-direction: column;
	  align-items: stretch;
	  width: 100%;
	  border-collapse: collapse;
	  overflow: auto;
	 	border-spacing: 0;
	 	border: 1px solid #ddd;
		.thead {
		  flex: 1 0 auto;
		  display: flex;
		  -webkit-box-orient: vertical;
		  flex-direction: column;
		  user-select: none;
		}
		.tbody {flex: 99999 1 auto;
	    display: flex;
	    -webkit-box-orient: vertical;
	    flex-direction: column;
		}
		.thead > .tr > .th {
			padding: 10px 8px;
			line-height: 33px;
    	color: rgba(0, 0, 0, 0.54);
	    font-weight: 500;
			position: relative;
			border-bottom: 1px solid #ddd;
			box-shadow: 0px 5px 3px -2px rgba(0,0,0,0.05)
		}
		.thead > .tr > .th.text-center > div {
			margin: 0 auto;
		}
		.thead > .tr > .th.th-sort-desc {
			box-shadow: inset 0 -3px 0 0 #ff5722;
		}
		.thead > .tr > .th.th-sort-asc {
			box-shadow: inset 0 3px 0 0 #ff5722;
		}
		.thead > .tr > .th.th-sort,
		.th-inner-sort {
			cursor: pointer;
		}
		.th-inner-sort::after {
			direction: ltr;
	    display: inline-block;
	    font-family: "Material Icons";
	    font-style: normal;
	    font-weight: normal;
	    letter-spacing: normal;
	    line-height: 1;
	    text-transform: none;
	    white-space: nowrap;
	    word-wrap: normal;
	    -webkit-font-feature-settings: "liga";
	    -webkit-font-smoothing: antialiased;
			content: 'unfold_more';
	    font-size: 18px !important;
	    top: 4px;
	    position: relative;
		}
		.th-inner-sort-desc::after {
			content: 'keyboard_arrow_down';
		}
		.th-inner-sort-asc::after {
			content: 'keyboard_arrow_up';
		}
		.tr {
			-webkit-box-flex: 1;
	    flex: 1 0 auto;
	    display: inline-flex;
			position: relative;
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }
		.tr-selected .td {
			background-color: #fffae8;
		}
		.th-checkbox > div {
			margin: 0 auto;
		}
		.th::after {
			border-bottom: 1px solid #ddd;
			content:'';
			width: 100%;
	    position: absolute;
	    bottom: 2px;
	    left: 0;
		}
		.th,
    .td {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      border-right: 1px solid rgba(0, 0, 0, 0.05);
			-webkit-box-flex: 1;
	    flex: 1 0 0;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    padding: 7px 10px;
	    overflow: hidden;
			white-space: pre-wrap;
			display: flex;
    	align-items: center;
      :last-child {
        border-right: 0;
      }
    }
		.th {
			border-bottom: none;
		}
  }
	.pagination {
		padding: 8px;
		display: block;
		position: relative;
		border: 1px solid #ddd;
		border-top: none;
		border-radius: 0;
		label.middle {
			border: 1px solid #ddd;
			border-left:none;
			border-right:none;
		}
		label.middle input {
			border: 1px solid #ddd;
	    border-bottom: none;
	    border-top: none;
		}
		label.middle select {
			height: 30px;
			border: 1px solid #ddd;
			border-top: none;
			border-bottom: none;
		}
	}
`;
