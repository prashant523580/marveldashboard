import{ useState, useEffect } from 'react';

import StickyHeadTable from './Table';
import LoadingComponent from './Loading';
import { fetchCharacters } from '../utils/apis';



function CharacterList() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharacters = characters.filter((character: any) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    let getData = async () => {
      setCharacters(await fetchCharacters())
      setLoading(false)
    }
    getData()
  }, []);



  if (loading) {
    return  <LoadingComponent/>
  }
  return (
    <div>
      <h1>Marvel Characters</h1>
      <div className="p-4">

        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          className='w-full p-1 rounded-md'
        />
      </div>


      <StickyHeadTable data={filteredCharacters} />
      {/* <CharacterChart characters={characters} /> */}
    </div>
  );
}

export default CharacterList;
