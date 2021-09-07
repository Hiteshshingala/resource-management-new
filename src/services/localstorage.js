import * as data from '../constant/data.json'

export const getData = () => {
    try {
        const serializedState = localStorage.getItem('resourceData');
        if (serializedState === null) {
          setData(data.default);
          return data.default;
        }
        return JSON.parse(serializedState);
      } catch (err) {
        return undefined;
      }
}
export const setData = (data) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem('resourceData', serializedData);
      } catch (err) {
        return undefined;
      }
}

