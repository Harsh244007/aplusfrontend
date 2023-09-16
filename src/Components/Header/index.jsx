import React, { useState } from 'react';
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from '@chakra-ui/react';
import './index.css';
import Appstore from '../../Store/Appstore';
import DropdownMobile from './dropdown';
import { observer } from 'mobx-react';
import Desktopdropdown from './desktopdropdown';
import { Link } from 'react-router-dom';
import logomain from '../../assets/Aplus-logo-675x324-white.png';
import { CiSearch } from 'react-icons/ci';
import ReturnCategories from '../../Configs/JSON/returnProductDetails.json';
const Header = observer(({ BG = false }) => {
  const { colorMode } = useColorMode();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = event => {
    const query = event.target.value;
    setSearchQuery(() => query);

    const filteredResults = ReturnCategories.data.filter(item =>
      item.pro_name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <Box
      className={`mainHeader ${
        Appstore.footer || BG ? 'mainHeader2' : 'mainHeader2'
      }`}
      as="section"
    >
      <Box className="header" textAlign="center">
        <HeaderLogo colorMode={colorMode} Logo={logomain} />
        {Appstore.device ? (
          <Box
            display="flex"
            className="headerSecondPart"
            flexDir={'row'}
            gap={15}
          >
            <Box className="desktopSlider">
              <DropdownMobile />
            </Box>
          </Box>
        ) : (
          <>
            <Desktopdropdown />
            <InputBox
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchResults={searchResults}
              handleSearchInputChange={handleSearchInputChange}
            />
          </>
        )}
      </Box>
    </Box>
  );
});

function InputBox({ searchQuery, handleSearchInputChange, searchResults,setSearchQuery }) {
  return (
    <InputGroup className="inputheaderSearchMain" size="xl">
      <Input
        pr=".5rem"
        className="inputheaderSearch"
        type={'text'}
        w={'230px'}
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <InputRightElement marginBottom={'6px'} right={'6px'}>
        <CiSearch className="inputheaderSearchIcon" />
      </InputRightElement>
      {searchQuery.length > 0 && (
        <SearchResults value={searchQuery} setSearchQuery={setSearchQuery} results={searchResults} />
      )}
    </InputGroup>
  );
}

function SearchResults({ results, value,setSearchQuery }) {
  return (
    <div
      className="search-results" tabindex="0"
      style={{ maxHeight: '400px',minHeight: '40px', overflowY: 'auto' }}
    >
      {value !== '' && results.length === 0 ? (
        <div>No Results found</div>
      ) : (
        results.map(result => (
          <div key={result.id}>
            <Link onClick={()=>setSearchQuery('')} to={`/productDetails/${result.catid}/${result.showcaseid}/${result.pro_name}`}>
              <img
                src={`${Appstore.imageLink}/${result.pro_image}`}
                alt={result.pro_name}
              />
              <p>{result.pro_name}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default React.memo(Header);

function HeaderLogo({ colorMode, Logo }) {
  return (
    <Box className="titleText">
      <Link to="/">
        <Image loading="lazy" src={Logo} alt="Aplus Audios" />
      </Link>
    </Box>
  );
}
