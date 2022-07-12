import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavbarComponent from "../../components/NavbarComponent";

// googleId of profile owner to check if this user is the owner of this profile page
const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const params = useParams();

  const isOwner = params.ownerId === user.googleId;

  return (
    <>
          <NavbarComponent />
          
    </>
  );
};

export default Profile;
