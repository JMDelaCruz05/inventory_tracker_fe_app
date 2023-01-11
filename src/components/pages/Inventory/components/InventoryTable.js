import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { moneyFormat } from '../../../../common/functions/formatter';
// import { Products } from '../../../../common/data/sampleData';
import { useGetProductListQuery } from '../../../../common/redux/apiSlices/productApiSlice';

const columns = [
  { 
    field: 'productId', 
    headerName: 'ID', 
    width: 70 
  },
  { 
    field: 'productName', 
    headerName: 'Product Name', 
    width: 200 
  },
  { 
    field: 'stocks', 
    headerName: 'Stocks', 
    width: 130 
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 130,
    valueGetter: (params) =>
      moneyFormat(params.row.price, '$'),
  },
];

export default function InventoryTable() {

  const { data, error, isLoading } = useGetProductListQuery();

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data ? data : []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.productId}
      />
    </div>
  );
}