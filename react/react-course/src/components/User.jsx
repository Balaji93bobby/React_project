function User({id, name, username}){
    console.log("User component props:", { id, name, username });
    return (
                <div  style={{ border: "1px solid red", margin: "16px", color: "blue" }}>
                    <div>id: <span style={{color:'red', margin:'10px'}}>{id}</span></div>
                    <div>Name: <span style={{color:'red',margin:'15px'}}>{name}</span></div>
                    <div>Username: <span style={{color:'red', margin:'25px'}}>{username}</span></div>
                </div>
    )
}

export default User