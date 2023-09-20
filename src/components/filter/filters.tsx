import { useMemo } from 'react';

import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps, SelectProps } from 'antd';
import { Menu } from 'antd';

import Filter from './filter';
import { tags, types } from '../../data/data';

interface Props {
  onChangeTag: (tag: string) => void;
  onChangeType: (type: string) => void;
}

const tagsOptions: SelectProps['options'] = tags.map(tag => ({
  value: tag,
  label: tag.toUpperCase(),
}));

const typesOptions: SelectProps['options'] = types.map(type => ({
  value: type,
  label: type,
}));

const FilterTable = ({ onChangeTag, onChangeType }: Props) => {
  const items: MenuProps['items'] =  useMemo(() => ([
    {
      label: 'Фильтры',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: <Filter title='Тип ПК' onChange={onChangeType} options={typesOptions} />,
        },
        {
          type: 'group',
          label: <Filter title='Теги' onChange={onChangeTag} options={tagsOptions} />,
        },
      ],
    },
  ]), [onChangeType, onChangeTag]);

  return <Menu mode="horizontal" items={items} />;
};

export default FilterTable;
