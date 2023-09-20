import { ChangeEvent, FormEvent, useCallback, useEffect, useState, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { DataType, data } from "../../data/data";
import { Breadcrumb, Layout, theme } from "antd";
import { Search } from "../search/search";
import TableApp from "../table/table";
import { filterData } from "../../utils/core";
import FilterTable from "../filter/filters";

interface HandleSearchProps {
  name?: string;
  tag?: string;
  type?: string;
}

const { Content } = Layout;

const ContentScreen: React.FC = () => {
  const [searchData, setSearchData] = useState<DataType[]>(data);
  const [name, setName] = useState<string>();
  const [tag, setTag] = useState<string>();
  const [type, setType] = useState<string>();

  const [searchParams, setSearchParams] = useSearchParams();
  const { token: { colorBgContainer }, } = theme.useToken();


  const handleSearch = useCallback((props?: HandleSearchProps) => {
    const searchName = props?.name || name;
    const searchTag = props?.tag || tag;
    const searchType = props?.type || type;

    const currentParams = new URLSearchParams(searchParams.toString());

    if (currentParams.get('name') && !searchName) {
      currentParams.delete('name');
    }

    if (searchName) {
      currentParams.set('name', searchName);
    }

    setSearchParams(currentParams, { replace: true });
    setSearchData(filterData(data, { name: searchName, tag: searchTag, type: searchType }));
  }, [name, tag, type, searchParams, setSearchParams]);

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  }, [handleSearch]);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handleChangeTag = useCallback((tag: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('tag', tag);

    setSearchParams(currentParams.toString(), { replace: true });
    setTag(tag);
  }, [searchParams, setSearchParams]);

  const handleChangeType = useCallback((type: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('type', type);

    setSearchParams(currentParams.toString(), { replace: true });
    setType(type);
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const nameParam = searchParams.get('name') || '';
    const tagParam = searchParams.get('tag') || '';
    const typeParam = searchParams.get('type') || '';

    handleSearch({ name: nameParam, tag: tagParam, type: typeParam });

    setName(nameParam);
    setTag(tagParam);
    setType(typeParam);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const nameParam = searchParams.get('name') || '';
    const tagParam = searchParams.get('tag') || '';
    const typeParam = searchParams.get('type') || '';

    handleSearch({ name: nameParam, tag: tagParam, type: typeParam });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }} items={[{title: 'CMDB'}, {title: 'Серверы и ПК'}]}/>
      <h1>Серверы и ПК</h1>
      <Search onFormSubmit={handleFormSubmit} onInputChange={handleInputChange}/>
      <FilterTable onChangeTag={handleChangeTag} onChangeType={handleChangeType} />
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        <TableApp searchData={searchData} />
      </div>
    </Content>
  );
};

export default memo(ContentScreen);
