import {useState} from 'react';
import {CategoryProps, ItemDataProps} from './countryCodeModal.interface';
import {countryData} from './countryCodeModal.const';

const categoryController = (): CategoryProps => {
  const [modal, setModal] = useState<boolean>(false);
  const [countryDatas, setCountryDatas] = useState<ItemDataProps[] | any>(
    countryData,
  );
  const [Search, setSearch] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearch(text);
    const filter = countryDatas?.filter((item: any) => {
      const itemData = item?.name;
      const textData = text.toLowerCase();
      return itemData.toLowerCase().includes(textData);
    });

    {
      text == '' ? setCountryDatas(countryData) : setCountryDatas(filter);
    }
  };

  return {
    modal,
    setModal,
    Search,
    setSearch,
    handleSearch,
    countryDatas,
    setCountryDatas,
  };
};
export default categoryController;
