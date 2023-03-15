import { useNavigate } from "react-router-dom";
import "./Home.css";
import companyLogo from './dolphin.jpg';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';  



const Home = ({setPlayer, setTitle}) => {
  // {movie, setPlayer, setTitle}
  const navigate = useNavigate();

  const movie= [
    {
      trailer: "Dolphines-1 ",
      name : "dolph-a"
    },
    {
      trailer: "Dolphines -2 ",
      name : "dolph-b"
    },
    {
      trailer: "Dolphines-1 ",
      name : "dolph-a"
    },
    {
      trailer: "Dolphines -2 ",
      name : "dolph-b"
    }
  ]
  
  const handelClick = (link, title) => {
    setPlayer(link);
    setTitle(title)
    navigate("/player")
  }

  return (
    <div className="page1">
      <Link to="/upload"><Button variant="contained" class='upload'>Upload</Button></Link>

      
      <div className="row_posters">
        {movie.map((curr, i) => (
          <div className="row_poster" key = {i} onClick = {() => handelClick(curr.trailer, curr.name)}>
            <img src={companyLogo} alt={curr.name}/>
            <h3>{curr.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
