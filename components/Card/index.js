export default function Card({
    degree = "none",
        colour = "aliceblue",
        font = 0,
        image = 'icon/personTwo.png'
}) {
    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
            {
                colour === "transparent" ?  <img src={'icon/person.png'} width="50"/> :
                colour === "none" ? <img src={'icon/personThree.png'} width="0"/> :
                                    <img src={image} width="0"/>
            }
            {degree}
        </div>
    )
}