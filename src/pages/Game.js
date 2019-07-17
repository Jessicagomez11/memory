import React from "react";
import CharacterCard from "../components/CharacterCard"
import CardWrapper from "../components/CardWrapper"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import images from "../characters.json"


class Game extends React.Component {

    state = {
        message: "Click on a Thor to Start!",
        score: 0,
        topScore: 0,
        images,
        hasBeenClicked: [],

    }

    
     shuffle = ()=> {
        this.state.images.sort(() => Math.random() - 0.5);
        this.setState({images: this.state.images})

      }

    addToArray = (id) => {

        console.log(`you clicked on ${id}`)
        this.state.hasBeenClicked.includes({ id })
        
        //determines whether the image was clicked on 
        !this.state.hasBeenClicked.includes(id) ?
            this.state.hasBeenClicked.push(id)
            :this.setState({ message: " Game Over! "});

        //show which images have been clicked on
        console.log(this.state.hasBeenClicked)
    }


    handleClick = (id,) => {
        console.log(id)

       this.shuffle()

        //score tracker
        !this.state.hasBeenClicked.includes(id) ?
            this.setState({ score: this.state.score + 1 }) 
            :this.setState({ score: 0 });

        console.log(` array: ${this.state.hasBeenClicked}`)


        !this.state.hasBeenClicked.includes(id) ?
            this.setState({ message: "Correct!" })
            :this.setState({ hasBeenClicked: []});


    }

  

    render() {
        return (
            <div>
                <Nav msg={this.state.message} score={this.state.score} topScore={this.state.topScore}>

                </Nav>
                <CardWrapper>
                    {this.state.images.map(image => (

                        <CharacterCard
                            id={image.id}
                            url={image.url}
                            clicked={this.handleClick}
                            key={image.id}
                            adding={this.addToArray}
                        />

                    ))

                    }

                </CardWrapper>
                <Footer/>
               
            </div>
        )

    }

}

export default Game