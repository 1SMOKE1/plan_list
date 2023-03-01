import { usePlanQuery } from "../../store";


const Home = () => {
  const {isLoading, isError, data} = usePlanQuery('0');


  return ( 
    <section>
      HOME
    </section>
   );
}
 
export default Home;
