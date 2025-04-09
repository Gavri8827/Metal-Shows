import '../styles/HomePage.css';
import SearchBox from "../components/SearchBox";
import DateBox from "../components/DateBox";
import FilterBox from "../components/FilterBox";
import ShowCard from '../components/ShowCard';

//פה יהיה הדאטא ממנו תיבת החיפוש תחפש-בתכלס זה יהיה טבלה מתוך הDB נניח של שמות הלהקות או דברים נוספים אם ארצה
const searchData=[]; 
const locationFilter=[];
const dateFilter=[];
//רשימת מופעים מדומה
const mockShows=[
    {band_name:'Disturbed',
    date:'06/05/2025',
    location:'Jiffy Lube,Virginia',
    picture:'https://www.billboard.com/wp-content/uploads/media/disturbed-press-photo-2015-billboard-650.jpg?w=650&h=430&crop=1'},

    {band_name:'Killswitch Engage',
    date:'07/06/2025',
    location:'Jiffy Lube,Virginia',
    picture:'https://www.metalblade.com/us/newspics/kse-signing.jpg'}

];


function HomePage () {
    return (
        <div className="HomePageContainer">
        <h2>Welcome to the Home Page</h2>

        {/* שורת חיפוש אחת */}
        <div className="search-bar">
            <SearchBox data={searchData} />
            <FilterBox data={locationFilter} />
            <DateBox data={dateFilter} />
        </div>

        {/*הצגת רשימת המופעים בדף הבית כקומפוננטות של SHOWCARD*/}
        <div className="shows-list">
            {mockShows.map((show)=>(
                <ShowCard 
                band_name={show.band_name}
                date={show.date}
                location={show.location}
                picture={show.picture}
                />
            ))
            }
        </div>


    </div>

    );

}

export default HomePage;