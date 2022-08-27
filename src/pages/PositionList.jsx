import React, { useState, useEffect } from 'react';
import PositionService from '../services/positionService';
import { Icon, Menu, Table, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export default function PositionList() {

  const [positions, setPositions] = useState([]);
  const positionService = new PositionService();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();



  // useEffectin içerisine component yüklendiğinde yapılmasını istediğimiz kodu yazarız
  useEffect(() => {

    let positionService = new PositionService()
    positionService.getPositions().then(result => setPositions(result.data.data))

  }, [])


  function handleDelete(id) {

    if (window.confirm("Are you sure delete?")) {
        positionService.deletePosition(id)
        .then(() => setStatus('Delete successful'));
        window.location.reload();

    }  
}



  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>  
            <Table.HeaderCell>Sil</Table.HeaderCell>
  
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
            positions.map(position => (

              <Table.Row key={position.id}>
                <Table.Cell>{position.id}</Table.Cell>
                <Table.Cell>{position.name}</Table.Cell>
                <Table.Cell><Button color="red" onClick={()=>handleDelete(position.id)} fluid >Sil</Button></Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>    </div>
  )
}
