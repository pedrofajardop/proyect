import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";


const Footer = () => {
    return (
        <Box>
          <FooterContainer>
              <Row>
                  <Column>
                      <Heading>Sobre Nosotros</Heading>
                      <FooterLink href="">
                          Quienes Somos
                      </FooterLink>
                      <FooterLink href="">
                          Compromisos
                      </FooterLink>
                      <FooterLink href="">
                          Testimonios
                      </FooterLink>
                  </Column>
                  <Column>
                      <Heading>Servicios</Heading>
                      <FooterLink href="#">
                          Envios
                      </FooterLink>
                      <FooterLink href="#">
                          Asesorias
                      </FooterLink>
                      <FooterLink href="Reclamo">
                          Reclamos
                      </FooterLink>
                  </Column>
                  <Column>
                      <Heading>Contactanos</Heading>
                      <FooterLink href="mailto:mar.baeza@alumnos.uai.cl">
                          María Baeza mar.baeza@alumnos.uai.cl 
                      </FooterLink>
                      <FooterLink href="mailto:mar.contreras@alumnos.uai.cl">
                          María Contreras mar.contreras@alumnos.uai.cl
                      </FooterLink>
                      <FooterLink href="mailto:pefajardo@alumnos.uai.cl">
                          Pedro Fajardo pefajardo@alumnos.uai.cl
                      </FooterLink>
                  </Column>
                  <Column>
                      <Heading>RRSS</Heading>
                      <FooterLink href="https://www.facebook.com/">
                          Facebook
                      </FooterLink>
                      <FooterLink href="https://www.instagram.com/">
                          Instagram
                      </FooterLink>
                      <FooterLink href="https://twitter.com/">
                          Twitter
                      </FooterLink>
                  </Column>
              </Row>
          </FooterContainer>
          <p
              style={{
                  color: "green",
                  textAlign: "center",
                  marginTop: "10px",
                  fontWeight: "bold",
              }}
          >
              Tienda RoJoPe 2023-2
          </p>
          <FooterLink href="/Terminos">
              <i className="fab fa-twitter">
                  <span
                      style={{
                          textAlign: "center",
                      }}
                  >
                      Terminos y condiciones
                  </span>
              </i>
          </FooterLink>
        </Box>
    );
};
export default Footer;