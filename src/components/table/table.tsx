import React from 'react';
import {  Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataType } from '../../data/data';


const columns: ColumnsType<DataType> = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Тип ПК',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Расположение',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Орг.Единица',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: 'Инв.номер',
    dataIndex: 'itemNumber',
    key: 'itemNumber',
  },
  {
    title: 'Тег',
    key: 'tags',
    dataIndex: 'tag',
    render: (_, { tag }) => (
      <Tag key={tag}>
        {tag.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Дата создания',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Дата обновления',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
  {
    title: 'Дата аудита',
    dataIndex: 'audit_at',
    key: 'audit_at',
  },
];

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {

    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

type Props = {
  searchData?: DataType[]
  };

const TableApp: React.FC<Props> = ({searchData}) => {


  return (
    <Table columns={columns} dataSource={searchData} rowSelection={{ ...rowSelection,}} pagination={{total: searchData?.length, hideOnSinglePage: true, showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`}}/>
  )

}


export default TableApp;