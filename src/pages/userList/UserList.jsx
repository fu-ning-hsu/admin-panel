import React from "react"
import "./userList.css"
import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@mui/x-data-grid'
import { userRows } from "../../dummyData"
import { Link } from "react-router-dom";

export default function UserList() {
    const [ data, setData ] = React.useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width:70 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" alt='' src={params.row.avatar}/>
                    {params.row.userName}
                </div>
            )
          }
        },
        {
          field: 'email',
          headerName: 'Eamil',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 90,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                        <DeleteOutline 
                        className="userListDelete"
                        onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];
      
      
    return (
        <div className="userList">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            />  
        </div>
    )
}