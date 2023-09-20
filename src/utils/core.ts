import { DataType } from "../data/data";

interface FilterOptions {
    name?: string;
    tag?: string;
    type?: string;
}

const filterItem = (item: DataType, { name, tag, type }: FilterOptions) => {
    const conditions: boolean[] = [];

    if (name) {
        conditions.push(item.name.toLowerCase() === name);
    }

    if (tag) {
        conditions.push(item.tag === tag);
    }

    if (type) {
        conditions.push(item.type === type);
    }

    return conditions.length ? conditions.reduce((acc, current) => acc && current) : true;
};

export const filterData = (data: DataType[], options: FilterOptions) => {
    return data.filter((item) => filterItem(item, options));
};
