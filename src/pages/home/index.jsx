import Row from '~/components/row';
import requests from '~/utils/api/requests';


export default function Home() {
   return(
      <div>
         <Row title="Popular on Netflix" fetchUrl={requests.fetchPopularNetflix}/>
         <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      </div>
   )
}