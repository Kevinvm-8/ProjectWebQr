// import React, { useState, useEffect, useCallback } from 'react';
// import styled from 'styled-components';

// const CheckListContainer = styled.div`
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 20px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   max-width: 100000px;
//   margin: 140px auto;
// `;

// const Title = styled.h2`
//   color: #333;
//   text-align: center;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin-top: 20px;
// `;

// const TableHead = styled.thead`
//   background-color: #007bff;
//   color: #fff;
// `;

// const TableRow = styled.tr`
//   &:nth-child(even) {
//     background-color: #f2f2f2;
//   }
// `;

// const TableCell = styled.td`
//   padding: 10px;
//   text-align: center;
//   word-break: break-all;
// `;

// const ActionButton = styled.button`
//   background-color: ${(props) => (props.danger ? '#dc3545' : '#007bff')};
//   color: #fff;
//   border: none;
//   padding: 5px 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 14px;
//   margin-right: 5px;

//   &:hover {
//     background-color: ${(props) => (props.danger ? '#bd2130' : '#0056b3')};
//   }
// `;

// const Input = styled.input`
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 5px;
//   margin-right: 10px;
// `;

// const API_BASE_URL_BLACKLIST = 'http://localhost:7777/api/black-url-list';
// const API_BASE_URL_WHITELIST = 'http://localhost:7777/api/white-url-list';
// const API_BASE_URL_URL_LIST = 'http://localhost:7777/api/url-list';

// const CheckList = () => {
//   const [urlList, setUrlList] = useState([]);
//   const [newUrl, setNewUrl] = useState('');
//   const [newIp, setNewIp] = useState('');
//   const [newStatus, setNewStatus] = useState('Whitelist');
//   const [editUrl, setEditUrl] = useState('');
//   const [editIp, setEditIp] = useState('');
//   const [editIndex, setEditIndex] = useState(null);

//   const fetchData = useCallback(async (apiUrl) => {
//     try {
//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();
//       setUrlList((prevUrlList) => {
//         const uniqueData = data.filter((item) => !prevUrlList.some((existing) => existing.id === item.id));
//         return [...prevUrlList, ...uniqueData];
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData(API_BASE_URL_BLACKLIST);
//   }, [fetchData]);

//   useEffect(() => {
//     fetchData(API_BASE_URL_WHITELIST);
//   }, [fetchData]);

//   const handleAddUrl = async () => {
//     if (newUrl && newIp) {
//       try {
//         const response = await fetch(API_BASE_URL_URL_LIST, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             url: newUrl,
//             ip: newIp,
//             isBlackList: newStatus === 'Blacklist',
//           }),
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to add URL and IP: ${response.statusText}`);
//         }

//         setNewUrl('');
//         setNewIp('');
//         setNewStatus('Whitelist');
//         fetchData(API_BASE_URL_BLACKLIST);
//         fetchData(API_BASE_URL_WHITELIST);
//       } catch (error) {
//         console.error('Error adding URL and IP:', error.message);
//       }
//     }
//   };

//   const handleEditUrl = async () => {
//     if (editUrl && editIp && editIndex !== null && urlList[editIndex]) {
//       try {
//         const apiBaseUrl = urlList[editIndex].isBlackList ? API_BASE_URL_BLACKLIST : API_BASE_URL_WHITELIST;

//         const response = await fetch(`${API_BASE_URL_URL_LIST}/${urlList[editIndex].id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ url: editUrl, ip: editIp }),
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to update URL and IP: ${response.statusText}`);
//         }

//         fetchData(apiBaseUrl);
//         setEditUrl('');
//         setEditIp('');
//         setEditIndex(null);
//       } catch (error) {
//         console.error('Error updating URL and IP:', error.message);
//       }
//     }
//   };

//   const handleDeleteUrl = async (id) => {
//     try {
//       const apiUrl = `${API_BASE_URL_URL_LIST}/${id}`;
  
//       const response = await fetch(apiUrl, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`Failed to delete URL: ${response.statusText}`);
//       }
  
//       setUrlList((prevUrlList) => prevUrlList.filter((item) => item.id !== id));
//     } catch (error) {
//       console.error('Error deleting URL:', error.message);
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditUrl('');
//     setEditIp('');
//     setEditIndex(null);
//   };

//   return (
//     <CheckListContainer>
//       <Title>Checklist</Title>
//       <div>
//         <Input
//           type="text"
//           placeholder="Add URL"
//           value={newUrl}
//           onChange={(e) => setNewUrl(e.target.value)}
//         />
//         <Input
//           type="text"
//           placeholder="Add IP"
//           value={newIp}
//           onChange={(e) => setNewIp(e.target.value)}
//         />
//         <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
//           <option value="Whitelist">Whitelist</option>
//           <option value="Blacklist">Blacklist</option>
//         </select>
//         <ActionButton onClick={handleAddUrl}>Add </ActionButton>
//       </div>
//       <Table>
//         <TableHead>
//           <tr>
//             <th style={{ width: '40%', textAlign: 'center' }}>URL</th>
//             <th style={{ width: '20%', textAlign: 'center' }}>IP</th>
//             <th style={{ width: '20%', textAlign: 'center' }}>Status</th>
//             <th style={{ width: '20%', textAlign: 'center' }}>Actions</th>
//           </tr>
//         </TableHead>
//         <tbody>
//           {urlList.map((item) => (
//             <TableRow key={item.id}>
//               <TableCell>{item.url}</TableCell>
//               <TableCell>{item.ip}</TableCell>
//               <TableCell>
//                 {item.isBlackList ? (
//                   <span style={{ color: 'red' }}>Blacklist</span>
//                 ) : (
//                   <span style={{ color: 'green' }}>Whitelist</span>
//                 )}
//               </TableCell>
//               <TableCell>
//                 <ActionButton onClick={() => setEditIndex(item.id)}>Edit</ActionButton>
//                 <ActionButton
//                   danger
//                   onClick={() => handleDeleteUrl(item.id, item.isBlackList)}
//                 >
//                   Delete
//                 </ActionButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </tbody>
//       </Table>
//       {editIndex !== null && (
//         <div>
//           <Input
//             type="text"
//             placeholder="Edit URL"
//             value={editUrl}
//             onChange={(e) => setEditUrl(e.target.value)}
//           />
//           <Input
//             type="text"
//             placeholder="Edit IP"
//             value={editIp}
//             onChange={(e) => setEditIp(e.target.value)}
//           />
//           <ActionButton onClick={handleEditUrl}>Save</ActionButton>
//           <ActionButton danger onClick={handleCancelEdit}>
//             Cancel
//           </ActionButton>
//         </div>
//       )}
//     </CheckListContainer>
//   );
// };

// export default CheckList;
