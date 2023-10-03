import React from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../helpers/axios';
import ChartOne from '../../components/chart/ChartOne';
import ChartTwo from '../../components/chart/ChartTwo';
import ChartThree from '../../components/chart/ChartThree';
import LoadingComponent from '../../components/Loading';


function Comic() {
  const [character, setCharacter] = React.useState<any>();
  const [Loading, setLoading] = React.useState<boolean>(true)
  let params = useParams();
  React.useEffect(() => {
    axiosInstance.get(`/characters/${params.id}`).then((response) => {
      setCharacter(response.data.data.results[0]);
      setLoading(false);
    })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        setLoading(false);
      });
  }, [params?.id])
  React.useEffect(() => {
    console.log(character)
  }, [character])
  if (Loading) {
    return <LoadingComponent/>
  }
  return (
    <div>
      <div className="cover relative h-[300px] md:h-[400px] lg:h-[400px]  flex justify-center items-center">
        <img
          className='absolute rounded-md'
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }} src={character?.thumbnail?.path + "." + character?.thumbnail?.extension} alt={character?.name} title={character?.name} />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 "></div>
        <h1 className=' text-xl sm:2xl md:text-4xl lg:text-6xl text-center font-bold z-10 text-white'>{character?.name}</h1>
        <div className="absolute -bottom-[40px] left-10 shadow-md bg-gray-400 rounded-md overflow-hidden ">

          <img
            className=''
            style={{
              width: 150,
              height: 130,
              objectFit: "cover",
              objectPosition: "center"
            }} src={character?.thumbnail?.path + "." + character?.thumbnail?.extension} alt={character?.name} title={character?.name} />
        </div>
      </div>
      <div className="py-16 px-4">
        <div>
          {character.description}
        </div>
        <div className="grid grid-cols-1 md:grid-col-5 lg:grid-cols-5 gap-4 py-4 ">
          <div className="col-span-full md:col-span-3 lg:col-span-3">
            <ChartTwo data={character} />

          </div>
          <div className="col-span-full md:col-span-2 lg:col-span-2">

            <ChartThree data={character}/>
          </div>
          <div className="col-span-full ">
            <ChartOne/>

          </div>
        </div>
        {/* <Charts data={}/> */}
        {/* Comic {JSON.stringify(character)} */}
      </div>
    </div>
  )
}

export default Comic