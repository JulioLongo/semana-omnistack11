import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"></img>
        <span>Bem vindo, ONG</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041"></FiPower>
        </button>
      </header>
    </div>
  );
}
