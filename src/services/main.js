import React from 'react';
import isURL from 'validator/lib/isURL';

const parseString = (string) => {
    let arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (isURL(arr[i])) {
            console.log(arr)
            arr[i] = isImage(arr[i])
        } else {
            arr[i] = (<span> {arr[i]} </span>);
        }
    };
    return arr;
};

const isImage = (url) => {

    if (url.includes('.gif')) {
        return(<img alt='user img' src={url} style={{maxWidth: '300px'}}/>)
    } else if (url.includes('.png')) {
        return(<img alt='user img' src={url} style={{maxWidth: '300px'}}/>)
    } else if (url.includes('.jpeg')) {
        return(<img alt='user img' src={url} style={{maxWidth: '300px'}}/>)
    }else if (url.includes('.bmp')) {
        return(<img alt='user img' src={url} style={{maxWidth: '300px'}}/>)
    }else if (url.includes('.webp')) {
        return(<img alt='user img' src={url} style={{maxWidth: '300px'}}/>)
    } else if (url.includes('.apng')) {
        return(<img alt='user img' src={url} style={{maxWidth: '300px'}}/>)
    } else if (url.includes('.svg')) {
        return(<img alt='user img' src={url} style={{maxWidth: '300px'}}/>)
    } else if (url.includes('.jpg')) {
        return(<img alt='user img' src={url} style={{maxWidth: '300px'}}/>)
    } else {
        return(<a href={url} target='_blank' rel='noopener noreferrer'>{url}</a>)
    }
}

export default parseString;
/*
JPEG
GIF, including animated GIFs
PNG
APNG
SVG
BMP
BMP ICO
PNG ICO
WebP
*/