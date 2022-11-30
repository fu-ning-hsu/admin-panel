import React from "react"
import "./productList.css"
import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@mui/x-data-grid'
import { productRows } from "../../dummyData"
import { Link } from "react-router-dom";

export default function ProductList() {
    const [ data, setData ] = React.useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width:70 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          renderCell: (params) => {
            return (
                <div className="productListUser">
                    <img className="productListImg" alt='' src={params.row.img}/>
                    {params.row.name}
                </div>
            )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 90,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={"/product/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                        <DeleteOutline 
                        className="productListDelete"
                        onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];

    return (
        <div className="productList">
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