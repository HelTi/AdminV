import fetch from '../lib/fetch'


export const testData =() =>fetch('/static/data.json',{id:1});

export const testPost =() =>fetch('/static/data.json')
