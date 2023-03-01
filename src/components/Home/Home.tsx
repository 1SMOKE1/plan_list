import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { usePlanQuery } from "../../store";


const Home = () => {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);
  const {isLoading, isError, data} = usePlanQuery(debounced);
  

  useEffect(() => {
    console.log(debounced)
  }, [debounced])


  return ( 
    <section>
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
        {isError && <p className="text-center text-red-600">Что-то пошло не так</p>}
        <div className="relative w-[560px]">
          <input 
            type="text"
            className="border py-2 px-4 w-full h-[42px] mb-2"
            placeholder="Поиск по записям"
            value={search}
            onChange={(e) => (setSearch(e.target.value))}
          />
        </div>
      </div>
    </section>
   );
};
 
export default Home;
