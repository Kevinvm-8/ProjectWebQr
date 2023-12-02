import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const EditContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 40px auto; 
  position: absolute;
  top: 40%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 15px;
  width: 100%;
`;

const Select = styled.select`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 15px;
  width: 100%;
`;
const IdLabel = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.danger ? '#dc3545' : '#007bff')};
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;

  &:hover {
    background-color: ${(props) => (props.danger ? '#bd2130' : '#0056b3')};
  }
`;

const Edit = ({ editItem, onSave, onCancel }) => {
  const [editedUrl, setEditedUrl] = useState(editItem?.url || '');
  const [editedIp, setEditedIp] = useState(editItem?.ip || '');
  const [editedStatus, setEditedStatus] = useState(editItem?.isBlackList ? 'Blacklist' : 'Whitelist');

  const navigate = useNavigate();

  useEffect(() => {
    setEditedUrl(editItem?.url || '');
    setEditedIp(editItem?.ip || '');
    setEditedStatus(editItem?.isBlackList ? 'Blacklist' : 'Whitelist');
  }, [editItem]);

  const handleSave = async () => {
    try {
      if (!editItem || !editItem.id) {
        console.error('Invalid editItem or editItem.id is undefined');
        return;
      }

      const response = await fetch(`http://localhost:7777/api/url-list/${editItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: editedUrl,
          ip: editedIp,
          isBlackList: editedStatus === 'Blacklist',
        }),
      });

      if (!response.ok) {
        console.error('Failed to update item');
        return;
      }

      const updatedItem = await response.json();
      onSave(updatedItem);
      navigate('/checklist'); // Navigate back to the main checklist page after saving
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleCancel = () => {
    navigate('/checklist');
  };

  return (
    <EditContainer>
      <Title>Edit Item</Title>
      <IdLabel>ID: {editItem?.id}</IdLabel>
      <Input
        type="text"
        placeholder="Edit URL"
        value={editedUrl}
        onChange={(e) => setEditedUrl(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Edit IP"
        value={editedIp}
        onChange={(e) => setEditedIp(e.target.value)}
      />
      <Select value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
        <option value="Whitelist">Whitelist</option>
        <option value="Blacklist">Blacklist</option>
      </Select>
      <ActionButton onClick={handleSave}>Save</ActionButton>
      <ActionButton danger onClick={handleCancel}>
        Back
      </ActionButton>
    </EditContainer>
  );
};

export default Edit;

