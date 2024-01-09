import "./userProfile.css";
import userPic from "../../assets/Image/image";
function UserProfile({ user }) {
  const {
    firstName,
    gender,
    lastName,
    phone,
    email,
    university,
    image,
    bloodGroup,
    birthDate,
  } = user;

  return (
    <>
      <div class="profile-container">
        <div class="profile-header">
          <img src={userPic} alt="User Image" class="profile-image" />
          <h1>{firstName}</h1>
        </div>
        <div class="profile-details">
          <ul>
            <li>
              <strong>Gender:</strong> {gender}
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>University:</strong> {university}
            </li>
            <li>
              <strong>Blood Group:</strong>{bloodGroup}
            </li>
            <li>
              <strong>Birth Date:</strong> {birthDate}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
