import {useState} from 'react';
import {CategoryProps, ItemDataProps} from './countryCodeModal.interface';
import {allCountryData} from './countryCodeModal.const';

const categoryController = (): CategoryProps => {
  const [modal, setModal] = useState<boolean>(false);
  const [countryData, setCountryData] = useState<ItemDataProps[] | any>(
    allCountryData,
  );
  const [Search, setSearch] = useState<string>('');
  const [dataFilter, setDataFilter] = useState<any[] | any>(allCountryData);

  const handleSearch = (text: string) => {
    const alphabeticRegex = /^[a-zA-Z]+$/;
    if (text?.length == 0 || alphabeticRegex.test(text)) {
      setSearch(text);
      const filter = dataFilter?.filter((item: any) => {
        const itemData = item?.name;
        const textData = text.toLowerCase();
        return itemData.toLowerCase().includes(textData);
      });

      {
        text == '' ? setCountryData(countryData) : setCountryData(filter);
      }
    }
  };
  return {
    modal,
    setModal,
    Search,
    setSearch,
    handleSearch,
    countryData,
    setCountryData,
  };
};
export default categoryController;
