import React, {useContext} from 'react'
import FavoritesContext from '../store/favoritesContext';
import MeetupList from '../components/meetups/MeetupList'

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if(favoritesCtx.totalFavorites === 0){
    content = <p>No Favorites, would you like to add some?</p>;
  }else{
    content =  <MeetupList meetups={favoritesCtx.favorites}/>
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage