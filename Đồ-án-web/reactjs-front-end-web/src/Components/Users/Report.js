import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const ReportContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 100000px;
  margin: 40px auto;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  word-break: break-all;
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.danger ? '#dc3545' : '#28a745')};
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;

  &:hover {
    background-color: ${(props) => (props.danger ? '#bd2130' : '#218838')};
  }
`;

const API_BASE_URL_REPORT = 'http://localhost:7777/api/white-url-list';

const Report = () => {
  const [reportList, setReportList] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(API_BASE_URL_REPORT);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setReportList(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAccept = async (id) => {
    // Handle accept logic
    console.log(`Accepted report with ID ${id}`);
  };

  const handleDelete = async (id) => {
    // Handle delete logic
    console.log(`Deleted report with ID ${id}`);
  };

  return (
    <ReportContainer>
      <Title>Report</Title>
      <Table>
        <TableHead>
          <tr>
            <th style={{ width: '40%', textAlign: 'center' }}>URL</th>
            <th style={{ width: '30%', textAlign: 'center' }}>Status</th>
            <th style={{ width: '30%', textAlign: 'center' }}>Actions</th>
          </tr>
        </TableHead>
        <tbody>
          {reportList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.url}</TableCell>
              <TableCell>
                <span style={{ color: 'red' }}>Blacklist</span>
              </TableCell>
              <TableCell>
                <ActionButton onClick={() => handleAccept(item.id)}>Accept</ActionButton>
                <ActionButton danger onClick={() => handleDelete(item.id)}>
                  Delete
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ReportContainer>
  );
};

export default Report;
