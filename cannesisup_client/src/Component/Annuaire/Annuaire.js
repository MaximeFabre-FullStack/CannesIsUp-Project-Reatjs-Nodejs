import React, { Component } from "react";

import { Form, Row, Container, Col } from "react-bootstrap";

import "../../../src/mainStyle.css";
import "../SignUp/style.css";
import "./Annuaire.css";

import CarteAnnuaire from "./CarteAnnuaire/CarteAnnuaire";
import NavbarVisiteurs from "../Navbar/NavbarVisiteurs/NavbarVisiteurs";
import Footer from "../Footer/Footer";

// import InfiniteScroll from "react-infinite-scroll-component";

class Annuaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BDDdata: [],
      recherche: " ",
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    };

    fetch("http://localhost:8080/visiteurs", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ BDDdata: data });
        },

        (error) => {
          console.log(error);
        }
      );
  }

  handleSearchBar = async (e) => {
    await this.setState({ recherche: e.target.value });
  };

  affichageAnnuaire = () => {
    let adherentFiltred = this.state.BDDdata.filter((membre) => {
      for (let property in membre) {
        if (
          String(membre[property]).match(
            new RegExp(this.state.recherche, "g")
          ) &&
          property !== "_id"
        ) {
          return true;
        }
      }
      return false;
    });

    return adherentFiltred.map((element, index) => (
      <Col key={index} className="styleCol" xs={12} sm={6} md={4}>
        <CarteAnnuaire
          id={element._id}
          nomDeSociete={element.nomDeSociete}
          descriptionExhaustive={element.descriptionExhaustive}
          secteurDactivite={element.secteurDactivite}
          prenom={element.dirigeant.prenom}
          nom={element.dirigeant.nom}
          photoProfil={
            "http://localhost:8080/uploads/" + element.dirigeant.photoPortrait
          }
          couv={"http://localhost:8080/uploads/" + element.photoCouverture}
          logo={"http://localhost:8080/uploads/" + element.logo}
        />
      </Col>
    ));
  };

  /*fetchMoreData = () => {
    // a fake async api call like which sends
    // 9 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        BDDdata: this.state.BDDdata.concat(Array.from({ length: 9 })),
      });
    }, 1000);
  };*/

  render() {
    return (
      <div>
        <NavbarVisiteurs />
        <div className="header">
          <h1>ANNUAIRE DES MEMBRES</h1>
        </div>
        <div className="barreRecherche">
          <Form.Control
            placeholder="Recherchez : un membre, une activité, un mot clé..."
            className="react-search-field"
            onChange={this.handleSearchBar}
            name="recherche"
          />
        </div>
        <div>
          <p className="nombreMembres">
            {" "}
            Nombre de membres : {this.state.BDDdata.length}
          </p>
        </div>
        <div className="annuaireContainer">
          {/* <InfiniteScroll 
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}>*/}
          <Container>
            <Row>{this.affichageAnnuaire()}</Row>
          </Container>
          {/* </InfiniteScroll> */}
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Annuaire;
