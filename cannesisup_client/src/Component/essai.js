class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
    };
  }

  componentDidMount() {
    //   Options, paramètres de la requête
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    };

    fetch("http://localhost:8080/annuaire", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ data: data });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  afficherAdherent = async () => {
    let adherantFiltred = this.state.data.filter((membre) => {
      for (let property in membre) {
        console.log(membre[property]);
        if (
          String(membre[property]).match(
            new RegExp("(." + this.state.search + ".*)", "i")
          ) &&
          property !== "_id"
        ) {
          return true;
        }
      }
      return false;
    });

    return adherantFiltred.map((element, index) => {
      return (
        <div key={index.id}>
          <h1>{element.nomSociete}</h1>
          <h2>{element.ville} </h2>
        </div>
      );
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <input
                type="text"
                value={this.state.search}
                onChange={this.updateSearch}
              />
            </div>
            <div>{this.afficherAdherent()}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Searchbar;
