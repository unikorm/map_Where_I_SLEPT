
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
                <img src={process.env.PUBLIC_URL + user.profilePhoto} alt="profile of who was there" />
                <div className={styles.profileNames}>
                    <p>Nick: <span>{user.nick}</span></p>
                    <p>Name: <span>{user.name}</span></p>
                </div>
              </div>
            ))}
        </article>
    );   
};

export default Users;