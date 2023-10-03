import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchCharacters, fetchCharactersByName } from '../../utils/apis';
import { NavLink } from 'react-router-dom';
import LoadingComponent from '../../components/Loading';
interface ParamsTypes {
    name?: string | undefined | null | any
}
function Search() {
    const params = useParams() as ParamsTypes;
    const [searchData, setSearchData] = React.useState<any[]>([]);
    const [characters, setCharacters] = React.useState<any[]>([]);
    const [Loading, setLoading] = React.useState<boolean>(true)
    React.useEffect(() => {
        console.log(params.name)
        let getData = async () => {
            setSearchData(await fetchCharactersByName(params.name))
            setCharacters(await fetchCharacters())
            setLoading(false)
        }
        getData()
    }, [params.name])
    if (Loading) {
        return <LoadingComponent />
    }
    return (
        <div className='py-2'>
            <h1 className='p-2 border-b-2 font-bold text-3xl'>Search Results</h1>
            <div className="py-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 ">

                {
                    searchData.length > 0 ?
                        searchData.map((char) => (
                            <NavLink to={`/comic/${char.id}`} key={char.id} className={"flex space-x-2 shadow-md p-2 col-span-1"}>
                                <img

                                    style={{
                                        height: 100,
                                        width: 100,
                                        objectFit: "contain",
                                        objectPosition: "center"
                                    }} src={char?.thumbnail?.path + "." + char?.thumbnail?.extension} alt={char?.name} title={char?.name} />

                                <div className="grid">

                                    <h2 className='font-bold'>{char?.name}</h2>
                                    <p className='text-sm text-gray-600'>{char.series.available} series Available. </p>
                                    <p className='text-sm text-gray-600'>{char.comics.available} comics Available. </p>
                                    <p className='text-sm text-gray-600'>{char.stories.available} stories Available. </p>
                                </div>
                            </NavLink>
                        ))
                        :
                        characters.filter((char: any) => char.name.toLowerCase().includes(params.name.toLowerCase())).map((char: any) => (
                            <NavLink to={`/comic/${char.id}`} key={char.id} className={"flex space-x-2 shadow-md rounded-md p-2 bg-white"}>
                                <img
                                    className='rounded'
                                    style={{
                                        height: 100,
                                        width: 100,
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }} src={char?.thumbnail?.path + "." + char?.thumbnail?.extension} alt={char?.name} title={char?.name} />

                                <div className="grid">

                                    <h2 className='font-bold'>{char?.name}</h2>
                                    <p className='text-sm text-gray-600'>{char.series.available} series Available. </p>
                                    <p className='text-sm text-gray-600'>{char.comics.available} comics Available. </p>
                                    <p className='text-sm text-gray-600'>{char.stories.available} stories Available. </p>
                                </div>
                            </NavLink>
                        ))
                }
            </div>

        </div>
    )
}

export default Search