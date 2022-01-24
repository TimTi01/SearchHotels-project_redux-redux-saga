import styles from './app.module.scss'
import HotelSearchForm from "./Components/HotelSearchForm/HotelSearchForm";
import FavoritesHotelsList from "./Components/FavoritesHotelsList/FavoritesHotelsList";
import HotelsListContent from "./Components/HotelsListContent/HotelsListContent";

function App() {
    return (
        <div className={styles.app}>
            <div>
                <HotelSearchForm/>
                <FavoritesHotelsList/>
            </div>
            <HotelsListContent/>
        </div>
    );
}

export default App;
