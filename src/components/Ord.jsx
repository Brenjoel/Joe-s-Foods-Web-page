import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ord from '../images/ord.jpeg'


function Ord() {

  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };






  return (
    <>
       <div> <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
    <div  id='cen'> 
    <div className='c' > <h3>  <img src={ord} /> </h3>    <br></br>     </div>

    <div className='a' ><h3>Orders  </h3>  </div>

    <table cellPadding={40}  >
      <tr> 
      <th>ID</th>
      <th>Item</th>
      <th>Name</th>
      <th>Phno</th>
      </tr>

      {users.map((user,index) => (
        <tr>
          <th key={index}>  {index+1}  </th>
          <td>{user.item}</td>
          <td>{user.name}</td>
          <td>{user.phno}</td>

          <td>
           
                  <button  onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
          </td>
        </tr>
      ))}
    </table>
    <br></br>
    </div>

<div className='invisible'>  <br></br> .dgsgggggggggggggggggggggggggggggggcbdcgbgcdb.  <br></br> <br></br> <br></br>
 <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
   </div>
 .  
    </>
  );
}

export default Ord;