

import { getAllData } from '../articles/actions/fetchArticle';
import NewsList from './components/NewsList';

const News = async() => {

  const notifications = await getAllData()

  return (
    <div className="py-8" >
        <div className="flex justify-center">
          <p className="text-[50px] mb-5">News</p>
        </div>
        <div className="flex justify-center">
            <NewsList notifications={notifications}/>
         </div>
      </div>
  )
}

export default News