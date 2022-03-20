import React, {Component} from "react"
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card = styled.div `
  display: flex;
  align-items: center;
  margin: 100px;
  padding: 5px;
  border: solid 2px #694F5D;
  color: #4e6766;
  img {
    width: 15vw;
    margin-right: 5vw;
}
`

export default class Header extends Component{
    state= {
        musicas: [
            {
                art: "https://i.scdn.co/image/ab67616d0000b273fc13160fc9e797cb7612b5a2",
                faixa: "Meant to be Yours",
                artist: "Jaime Muscato"
            },
            {
                art: "https://i.scdn.co/image/ab67616d0000b273ad79d30f49891b2a2f7757f8",
                faixa: "Nothing Breaks Like a Heart",
                artist: "Miley Cyrus, Mark Ronson"
            },
            {
                art: "https://i.scdn.co/image/ab67616d0000b273cde37cfdee48dc0eae1e2ab8",
                faixa: "Somebody's Watching Me",
                artist: "Rockwell"
            },
            {
                art: "https://i.scdn.co/image/ab67616d0000b27376086200d394250d6eef8adf",
                faixa: "Santo",
                artist: "Jão"
            },
            {
                art: "https://i.scdn.co/image/ab67616d0000b27397376a1a61dd87e8d998cd9c",
                faixa: "MULHER DO ANO XD",
                artist: "Luísa Sonza"
            },
            {
                art: "https://i.scdn.co/image/ab67616d0000b273f86b8fb3fd8592686ce8401e",
                faixa: "remember the mornings",
                artist: "Clinton Kane"
            },
            {
                art: "https://upload.wikimedia.org/wikipedia/pt/9/96/Ros%C3%A9_-_R.jpg",
                faixa: "On the Ground",
                artist: "ROSÉ"
            },

        ]
    }

    render() {
        return (
          <div>
              <Title>Favorite Music's</Title>
            {this.state.musicas.map((item) => (
              <Card>
                <img src={item.art} alt={item.faixa} />
                <h3>{item.title}</h3>
                <h5>{item.artist}</h5>
              </Card>
            ))}
          </div>
        )

    }
}