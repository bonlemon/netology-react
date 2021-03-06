import React from 'react';
import NewsHeader from './NewsHeader';
import { blocks, titles } from '../data';
import NewsBlock from './NewsBlock';

/**
 * Компонент «новости»: разделы новостных категорий и список новостей.
 */

export default function News() {
    return (
        <React.Fragment>
            <NewsHeader titles={titles} />
            <NewsBlock blocks={blocks} />
        </React.Fragment>
    );
}
