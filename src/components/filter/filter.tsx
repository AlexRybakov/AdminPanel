import { CSSProperties } from 'react';
import { Select, Typography } from 'antd';
import type { SelectProps } from 'antd';

interface Props {
  title: string;
  onChange: (value: string) => void;
  options: SelectProps['options'],
}

const typographyStyles: CSSProperties = {
  marginBottom: 8,
  fontWeight: 500,
  fontSize: 16,
};

const styles: CSSProperties = {
  width: '100%',
};

const Filter = ({ title, onChange, options }: Props) => {
  return (
    <>
      <Typography style={typographyStyles}>{title}</Typography>
      <Select style={styles} onChange={onChange} options={options} />
    </>
  );
};

export default Filter;
