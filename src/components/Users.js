
import styles from "../styles/users.module.css";
import userData from "../blogData.json";

const Users = ({ users }) => {
    const userProfiles = users.map((userId) => 
        userData.users.find((user) => user.id === userId)
        );

    return (
        <article className={styles.usersBox}>
            {userProfiles.map((user) => (
              <div key={user.id} className={styles.separateUserBox}>
                <img src={process.env.PUBLIC_URL + user.profilePhoto} alt="profile photo" />
                <div>
                    <p>Nick: {user.nick}</p>
                    <p>Name: {user.name}</p>
                </div>
              </div>
            ))}
        </article>
    );   
};

export default Users;