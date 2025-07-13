function UserProfile(props){
    return(
        <>
        <p>Hello, I am {props.name} and I am {props.age} years old</p>
        <p> {props.bio}</p>
        </>
    );
}
export default UserProfile;

