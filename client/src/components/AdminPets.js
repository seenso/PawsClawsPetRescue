import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function AdminPets({ pets, setPets }) {
  const [showAddPet, setShowAddPet] = useState(false);
  const [showEditPet, setShowEditPet] = useState(false);
  const [petToUpdate, setPetToUpdate] = useState({id: "", name: "", status: "", image: "", species: "", breed: "", age: "", height: "", weight: "", fixed: "", energy_level: "", coat_type: "", coat_color: "", good_w_kids: "", good_w_cats: "", behavioral_issues: "", description: "", rabies_vaccine: "",FVRCP_vaccine: "", distemper_parvo_vaccine: "", dewormed: "", pet_foster: [], foster: []});

  function addPet(e) {
    // e.preventDefault();

    fetch("/pets", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: e.target[0].value,
        status: "Intake Pending", 
        image: "http://localhost:4000/images/defaultPet.png",
        species: e.target[1].value, 
        breed: e.target[2].value,
        age: e.target[3].value,
        height: e.target[4].value, 
        weight: e.target[5].value,
        energy_level: e.target[6].value,
        coat_type: e.target[7].value, 
        coat_color: e.target[8].value,
        good_w_kids: e.target[9].value, 
        good_w_cats: e.target[10].value, 
        behavioral_issues: e.target[11].value,
        dewormed: e.target[12].value,
        fixed: e.target[13].value, 
        rabies_vaccine: e.target[14].value, 
        distemper_parvo_vaccine: e.target[15].value,
        FVRCP_vaccine: e.target[16].value, 
        description: e.target[17].value,
      })
    })
    .then((r)=> {})
  }

  function AddPetModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Pet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form onSubmit={(e)=>{addPet(e)}}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="string" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Species</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBreed">
                <Form.Label>Breed</Form.Label>
                <Form.Control type="string" placeholder="Enter breed" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="string" placeholder="Enter age" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control type="string" placeholder="in inches" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="string" placeholder="in lbs" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Energy Level</Form.Label>
                <Form.Select>
                  <option>Choose...</option>
                  <option>Couch potato</option>
                  <option>Low</option>
                  <option>Low-Medium</option>
                  <option>Medium</option>
                  <option>Medium-High</option>
                  <option>High</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>Coat Type</Form.Label>
                <Form.Select>
                  <option>Choose...</option>
                  <option>Short hair</option>
                  <option>Medium hair</option>
                  <option>Long Hair</option>
                  <option>Double-Coated</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Coat Color</Form.Label>
                <Form.Control type="string" placeholder="Enter coat color(s)" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                {/* <Form.Label>Good with Kids?</Form.Label>
                <Form.Control type="string" placeholder="Enter age" /> */}
                <Form.Check type="checkbox" label="Good with kids?" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                {/* <Form.Label>Good with Cats?</Form.Label> */}
                <Form.Check type="checkbox" label="Good with cats?" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                {/* <Form.Label>Any Behavior Issues?</Form.Label>
                <Form.Control type="string" placeholder="Enter coat color(s)" /> */}
                <Form.Check type="checkbox" label="Any Behavior Issues?" />
              </Form.Group>
            {/* </Row>

            <Row className="mb-3"> */}
              <Form.Group as={Col} controlId="formGridDewormed">
                <Form.Check type="checkbox" label="Dewormed?" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFixed">
                <Form.Check type="checkbox" label="Fixed?" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridRabies">
                <Form.Label>Rabies Vaccine</Form.Label>
                <Form.Control type="string" placeholder="Enter type & date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRabies">
                <Form.Label>Distemper/Parvo Vaccine</Form.Label>
                <Form.Control type="string" placeholder="Enter type & date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFVRCP">
                <Form.Label>FVRCP Vaccine (cat only)</Form.Label>
                <Form.Control type="string" placeholder="Enter type & date" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description of Personality/Temperment or Behavioral Issues</Form.Label>
              <Form.Control as="textarea" rows={2}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  function editPet(e) {
    let petObj = {}
    // e.target[0].value //Name
      // e.target[1].value //Species
      // e.target[2].value //Breed
      // e.target[3].value //Age
      // e.target[4].value //Height
      // e.target[5].value //Weigiht
      // e.target[6].value //Energy
      // e.target[7].value //Coat type
      // e.target[8].value //Coat Color
    // e.target[9].value //Good w kids BOOLEAN
    // e.target[10].value //Good w cats BOOLEAN
    // e.target[11].value //Behavioral Issues BOOLEAN
    // e.target[12].value //Dewormed BOOLEAN
    // e.target[13].value //Rabies vaccine
      // e.target[14].value //FVRCP vaccine
      // e.target[15].value //Description

    if (e.target[0].value === "") {
      petObj["name"] = petToUpdate.name;
    } else if(e.target[0].value.toLowerCase() !== petToUpdate.name.toLowerCase()) {
      petObj["name"] = e.target[0].value;
    } 

    if (e.target[1].value === "") {
      petObj["species"] = petToUpdate.species;
    } else if(e.target[1].value.toLowerCase() !== petToUpdate.species.toLowerCase()) {
      petObj["species"] = e.target[1].value;
    } 

    if (e.target[2].value === "") {
      petObj["breed"] = petToUpdate.breed;
    } else if(e.target[2].value.toLowerCase() !== petToUpdate.breed.toLowerCase()) {
      petObj["breed"] = e.target[2].value;
    } 

    if (e.target[3].value === "") {
      petObj["age"] = petToUpdate.age;
    } else if(e.target[3].value.toLowerCase() !== petToUpdate.age.toLowerCase()) {
      petObj["age"] = e.target[3].value;
    } 

    if (e.target[4].value === "") {
      petObj["height"] = petToUpdate.height;
    } else if(e.target[4].value !== petToUpdate.height) {
      petObj["height"] = e.target[4].value;
    } 

    if (e.target[5].value === "") {
      petObj["weight"] = petToUpdate.weight;
    } else if(e.target[5].value !== petToUpdate.weight) {
      petObj["weight"] = e.target[5].value;
    } 

    if (e.target[6].value === "") {
      petObj["energy_level"] = petToUpdate.energy_level;
    } else if(e.target[6].value.toLowerCase() !== petToUpdate.energy_level.toLowerCase()) {
      petObj["energy_level"] = e.target[6].value;
    } 

    if (e.target[7].value === "") {
      petObj["coat_type"] = petToUpdate.coat_type;
    } else if(e.target[7].value.toLowerCase() !== petToUpdate.coat_type.toLowerCase()) {
      petObj["coat_type"] = e.target[7].value;
    } 

    if (e.target[8].value === "") {
      petObj["coat_color"] = petToUpdate.coat_color;
    } else if(e.target[8].value.toLowerCase() !== petToUpdate.coat_color.toLowerCase()) {
      petObj["coat_color"] = e.target[8].value;
    } 

    // Good w kids
    let isGoodWKids;
    if (e.target[9].value === "Yes") {
      isGoodWKids = true;
    } else if (e.target[9].value === "No") {
      isGoodWKids = false
    }

    if(isGoodWKids !== petToUpdate.good_w_kids) {
      petObj["good_w_kids"] = isGoodWKids;
    }

    // Good w cats
    let isGoodWCat;
    if (e.target[10].value === "Yes") {
      isGoodWCat = true;
    } else if (e.target[10].value === "No") {
      isGoodWCat = false
    }

    if(isGoodWCat !== petToUpdate.good_w_cats) {
      petObj["good_w_cats"] = isGoodWCat;
    } 

    // Behavioral issues
    let hasBehavioralIssues;
    if (e.target[11].value === "Yes") {
      hasBehavioralIssues = true;
    } else if (e.target[11].value === "No") {
      hasBehavioralIssues = false
    }

    if(hasBehavioralIssues !== petToUpdate.behavioral_issues) {
      petObj["behavioral_issues"] = hasBehavioralIssues;
    } 

    // Dewormed
    let isDewormed;
    if (e.target[12].value === "Yes") {
      isDewormed = true;
    } else if (e.target[12].value === "No") {
      isDewormed = false
    }

    if(isDewormed !== petToUpdate.dewormed) {
      petObj["dewormed"] = isDewormed;
    } 

    if (e.target[13].value === "") {
      petObj["rabies_vaccine"] = petToUpdate.rabies_vaccine;
    } else if(e.target[13].value.toLowerCase() !== petToUpdate.rabies_vaccine.toLowerCase()) {
      petObj["rabies_vaccine"] = e.target[13].value;
    } 

    if (e.target[14].value === "") {
      petObj["fvrcp_vaccine"] = petToUpdate.fvrcp_vaccine;
    } else if(e.target[14].value.toLowerCase() !== petToUpdate.fvrcp_vaccine.toLowerCase()) {
      petObj["fvrcp_vaccine"] = e.target[14].value;
    } 

    if (e.target[15].value === "") {
      petObj["description"] = petToUpdate.description;
    } else if(e.target[15].value.toLowerCase() !== petToUpdate.description.toLowerCase()) {
      petObj["description"] = e.target[15].value;
    } 

    if (e.target[16].value === "") {
      petObj["status"] = petToUpdate.status;
    } else if(e.target[16].value !== petToUpdate.status) {
      petObj["status"] = e.target[16].value;
    } 

    // Fixed
    let isFixed;
    if (e.target[17].value === "Yes") {
      isFixed = true;
    } else if (e.target[17].value === "No") {
      isFixed = false
    }

    if(isFixed !== petToUpdate.fixed) {
      petObj["fixed"] = isFixed;
    } 
    
    console.log("petObj.status", petObj.status)
    console.log("petObj.fixed", petObj.fixed)

    fetch(`/pets/${petToUpdate.id}`, {
      method: "PATCH", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(petObj)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(pet => {
          console.log("PATCH /pets success!", pet)
        })
      } else {
        r.json().then((err) => {
        console.log("PATCH pets error", err);
      })
      }
    })
  }

  function EditPetModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Pet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Form onSubmit={(e)=>{editPet(e)}}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="string" placeholder={petToUpdate.name} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Species</Form.Label>
                <Form.Select>
                  <option>{petToUpdate.species}</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBreed">
                <Form.Label>Breed</Form.Label>
                <Form.Control type="string" placeholder={petToUpdate.breed} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="string" placeholder={petToUpdate.age} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control type="string" placeholder={petToUpdate.height} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="string" placeholder={petToUpdate.weight} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Energy Level</Form.Label>
                {/* <Form.Control type="string" placeholder={petToUpdate.energy_level} /> */}
                <Form.Select>
                  <option>{petToUpdate.energy_level}</option>
                  <option>Couch potato</option>
                  <option>Low</option>
                  <option>Low-Medium</option>
                  <option>Medium</option>
                  <option>Medium-High</option>
                  <option>High</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>Coat Type</Form.Label>
                <Form.Select>
                  <option>{petToUpdate.coat_type}</option>
                  <option>Short hair</option>
                  <option>Medium hair</option>
                  <option>Long Hair</option>
                  <option>Double-Coated</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWeight">
                <Form.Label>Coat Color</Form.Label>
                <Form.Control type="string" placeholder={petToUpdate.coat_color} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Good with Kids?</Form.Label>
                <Form.Select>
                  <option>{petToUpdate.good_w_kids ? "Yes" : "No"}</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Good with Cats?</Form.Label>
                <Form.Select>
                  <option>{petToUpdate.good_w_cats ? "Yes" : "No"}</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Any behavioral issues?</Form.Label>
                <Form.Select>
                  <option>{petToUpdate.behavioral_issues ? "Yes" : "No"}</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Dewormed?</Form.Label>
                <Form.Select>
                  <option>{petToUpdate.dewormed ? "Yes" : "No"}</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAge">
                <Form.Label>Rabies Vaccine*</Form.Label>
                <Form.Control type="string" placeholder={petToUpdate.rabies_vaccine}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHeight">
                <Form.Label>FVRCP Vaccine (cat only)*</Form.Label>
                <Form.Control type="string" placeholder={petToUpdate.FVRCP_vaccine} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description of Personality/Temperment or Behavioral Issues*</Form.Label>
              <p><i>*will overwrite current text</i></p>
              <Form.Control as="textarea" rows={2} 
                placeholder={petToUpdate.description}
              />
            </Form.Group>

          <Form.Group as={Col} controlId="formGridSpecies">
            <Form.Label>Status</Form.Label>
            <Form.Select>
              <option>{petToUpdate.status}</option>
              <option>Available</option>
              <option>Adopted!</option>
            </Form.Select>
          </Form.Group>

          {petToUpdate.fixed ? <div></div> : 
            <>
              <Form.Group as={Col} controlId="formGridSpecies">
                <Form.Label>Fixed?</Form.Label>
                <Form.Select>
                  <option>{petToUpdate.fixed ? "Yes" : "No"}</option>
                  <option>Yes</option>
                </Form.Select>
              </Form.Group>
            </>
          }

              <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  
  function openEditPetModal(pet) {
    setPetToUpdate(pet);
    setShowEditPet(true);
  }

  return (
    <div id="admin_pets">
      <h3>Rescue Pets</h3>

      <>
        <Button variant="primary" onClick={() => setShowAddPet(true)}>
          Add Pet
        </Button>

        <AddPetModal
          show={showAddPet}
          onHide={() => setShowAddPet(false)}
        />
      </>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Pet #</th>
            <th>Status</th>
            <th>Name</th>
            <th>Foster</th>
            <th>Picture</th>
            <th>Species</th>
            <th>Breed</th>
            <th>Age</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Fixed</th>
            <th>Energy Level</th>
            <th>Coat Type</th>
            <th>Good w Kids?</th>
            <th>Good w Cats?</th>
            <th>Behavioral Issues?</th>
            <th>Rabies Vaccine</th>
            <th>FVRCP Vaccine (cat only)</th>
            <th>Distemper/Parvo Vaccine</th>
            <th>Dewormed?</th>
          </tr>
        </thead>
        <tbody>
          {pets.map(pet => (
            <tr key={pet.id}>
              <td>
                <Button onClick={() => openEditPetModal(pet)}>
                  Edit
                </Button>

                <EditPetModal
                  show={showEditPet}
                  onHide={() => setShowEditPet(false)}
                />              
              </td>
              <td>{pet.id}</td>
              <td>{pet.status}</td>
              <td>{pet.name}</td>
              <td>{pet.foster.length === 0 ? "-" : `${pet.foster[0].first_name} ${pet.foster[0].last_name}`}</td>
              <td>
                <img alt={pet.id} src={pet.image} height="50px"/>
              </td>
              <td>{pet.species}</td>
              <td>{pet.breed}</td>
              <td>{pet.age}</td>
              <td>{pet.height}</td>
              <td>{pet.weight}</td>
              <td>{pet.fixed ? "Yes" : "No"}</td>
              <td>{pet.energy_level}</td>
              <td>{pet.coat_type}</td>
              <td>{pet.good_w_kids ? "Yes" : "No"}</td>
              <td>{pet.good_w_cats ? "Yes" : "No"}</td>
              <td>{pet.behavioral_issues ? "Yes" : "No"}</td>
              <td>{pet.rabies_vaccine}</td>
              <td>{pet.species === "Cat" ? pet.FVRCP_vaccine : "---"}</td>
              <td>{pet.distemper_parvo_vaccine}</td>
              <td>{pet.dewormed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}