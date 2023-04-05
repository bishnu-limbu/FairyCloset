

function ProfileCard(Props){
    console.log(Props)
    return(
        <div>
        <img src={Props.image}></img> <br/>
       {Props.name}<br/>
       {Props.email}
       
       
        

        </div>

    )
}
export default ProfileCard;