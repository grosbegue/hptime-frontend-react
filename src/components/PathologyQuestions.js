import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import { Link } from "react-router-dom";

// child card component
import SpecialtyCard from "./SpecialtyCard";
// images
const generale = "/images/pictos/medical.svg";
const dent = "/images/pictos/dentaire.svg";
const uterus = "/images/pictos/gynecologie.svg";
const main = "/images/pictos/plaie_de_main.svg";
const oeil = "/images/pictos/ophtalmologie.svg";
const orl = "/images/pictos/ORL.png";
const anus = "/images/pictos/anus.svg";
const psychiatrie = "/images/pictos/psychiatrie.svg";
const gorge = "/images/pictos/gorge.svg";

class PathologyQuestions extends Component {
  // update user search filters
  clickHandler(event) {
    this.props.updatePatient(event);
  }

  // show next step and lift choice up to form step counter
  userChoice(event) {
    this.props.nextStep(event);
    this.props.onFormStep(this.props.totalSteps, this.props.currentStep);
  }

  // card list of specialities that helps to filter search results of hospitals and structures with corresponding services
  render() {
    const Ul = posed.ul({
      enter: { staggerChildren: 50 },
      exit: { staggerChildren: 20 }
    });

    const Li = posed.li({
      enter: { y: 0, opacity: 1, delay: 500 },
      exit: { y: 5000, opacity: 0 }
    });

    const specialtyList = [
      {
        bodyPart: "Oeil",
        neededSpecialist: "Ophtalmologiques",
        image: oeil,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
      },
      {
        bodyPart: "ORL",
        neededSpecialist: "Oto-rhino-laryngologiques",
        image: orl,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Dents",
        neededSpecialist: "Dentaires",
        image: dent,
        infoTitle: "",
        infoText:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. "
      },
      {
        bodyPart: "Problème à la gorge",
        neededSpecialist: "Oto-rhino-laryngologiques",
        image: gorge,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Main (plaie ouverte)",
        neededSpecialist: "Plaies de la main",
        image: main,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Poitrine",
        neededSpecialist: "Proctology",
        image: generale,
        infoTitle: "",
        infoText:
          "La proctologie. Lorem Ipsum est simplement du faux texte employé dans la composition"
      },
      {
        bodyPart: "Gynécologie, Grossesse",
        neededSpecialist: "Gynéco-obstétricales",
        image: uterus,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Ventre",
        neededSpecialist: "Proctology",
        image: generale,
        infoTitle: "",
        infoText:
          "La proctologie. Lorem Ipsum est simplement du faux texte employé dans la composition"
      },
      {
        bodyPart: "Côlon",
        neededSpecialist: "Proctology",
        image: anus,
        infoTitle: "",
        infoText:
          "La proctologie. Lorem Ipsum est simplement du faux texte employé dans la composition"
      },
      {
        bodyPart: "Psychiatrie",
        neededSpecialist: "Psychiatriques",
        image: psychiatrie,
        infoTitle: "",
        infoText: "Le Lorem Ipsum est simplement du faux texte employé dans."
      },
      {
        bodyPart: "Medecine générale",
        neededSpecialist: "Générales",
        image: generale,
        infoTitle: "",
        infoText: "Pour tout autre type d'urgence."
      }
    ];
    return (
      <section id="PathologyCards">
        <p className="lead text-center">
          <span className="float-left pl-3">
            <Link
              to="#0"
              onClick={this.props.previousStep}
              className="text-secondary"
            >
              ..revenir
            </Link>
          </span>
          <span className="text-center mr-4 pr-4">
            Où se situe la douleur ?
          </span>
        </p>
        {/* <hr className="mb-5" /> */}
        <Ul className="list-unstyled">
          {specialtyList.map((oneSpecialty, index) => {
            return (
              <Li key={index} className="item">
                <SpecialtyCard
                  // card specs
                  bodyPart={oneSpecialty.bodyPart}
                  picture={oneSpecialty.image}
                  neededSpecialist={oneSpecialty.neededSpecialist}
                  infoText={oneSpecialty.infoText}
                  index={index}
                  // update filter and next step in form events
                  updatePatient={event => this.props.updatePatient(event)}
                  nextStep={event => this.userChoice(event)}
                />
              </Li>
            );
          })}
        </Ul>
      </section>
    );
  }
}

export default PathologyQuestions;
