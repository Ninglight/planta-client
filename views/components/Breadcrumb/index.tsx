// define
import React from 'react';
import { Breadcrumb as BreadcrumbAntd } from 'antd';

type Props = {
    items: { label:string; link:string; }[];
};

const Breadcrumb: React.FC<Props> = ({ items }) => {
    return (
        <BreadcrumbAntd>
            {items.map((item) => {
                <BreadcrumbAntd.Item>{item.label}</BreadcrumbAntd.Item>
            })}
        </BreadcrumbAntd>
    )
}

export default Breadcrumb
