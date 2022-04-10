// import {
//   Facebook,
//   Instagram,
//   MailOutline,
//   Phone,
//   Pinterest,
//   Room,
//   Twitter,
// } from "@material-ui/icons";
import Logo from './svg/yeshtery.png';
import React from "react";
import styled from "styled-components";
import Fac from './svg/fac.png';
import Inst from './svg/inst.png';
import Link from './svg/link.png';
import Twiter from './svg/twitter.png';
import Cash from './svg/cash.png';
import Visa from './svg/visa.png';
import Master from './svg/master.png';
import NasNav from './svg/nasnav.png';
import Send from './svg/tele.png';
// import { mobile } from "../responsive";

const Container = styled.div`
  align-items: center;
  display: flex;
  background: #3C3C3B 0% 0% no-repeat padding-box;
  opacity: 1;
  margin:20px;
  max-width: 100%;
`;

const Left = styled.div`
  margin:50px;
  max-width:100px;
  display: flex;

`;

const Yeshtery = styled.img`
max-width: 150px;
  height: 50px;
  
`;

const Desc = styled.p`
  margin: 10px 0px;
  text-align: left;
  font-size:small;
  letter-spacing: -0.4px;
  color: #FFFFFF;
  opacity: 1;
  
`;

const CopyRight = styled.p`
  text-align: left;
  font-size:small;
  letter-spacing: -0.4px;
  color: #FFFFFF;
  opacity: 1;
  border-top: 0.5004362463951111px solid #D8D8D8;
  opacity: 1;
  padding-top: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  display:flex;
`;
const Icon = styled.img`
  max-width: 26px;
  max-height: 22px;
  padding-right:5px;
  background: transparent url('img/Group 1432.png') 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const Center = styled.div`
  flex: 1;
  padding: 5px;
  padding-right:100px;
  
`;

const Title = styled.p`
  margin-bottom: 9px;
  color:white;
  text-align: left;
  letter-spacing: -0.45px;
  color: #FFFFFF;
  opacity: 1;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-align: left;
  font-size:small;
  letter-spacing: -0.4px;
  color: #FFFFFF;
  opacity: 1;
`;

const Right = styled.div`
  padding-left: 100px;
  flex: 1;
  padding: 20px;
`;
const Search = styled.div`
  max-width: 350px;
  max-height: 38px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 24px;
  opacity: 1;
  display: flex;
  margin-bottom: 15px;
`;
const Mail = styled.div`
  text-align: left;
  letter-spacing: -0.3px;
  color: #542E90;
  opacity: 1;
  font-size:small;
  padding:7px;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.div`
  background: #FFF200 0% 0% no-repeat padding-box;
  border-radius: 19px;
  opacity: 1;
  font-size:small;
  font-wight:bolder;
  margin:3px;
  margin-left:150px;
  padding:5px;
  padding-left:8px;
  max-width:100px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  letter-spacing: -0.25px;
  color: #000000;
  opacity: 1;
`;
const Tele = styled.img`
    max-width: 30%;
    padding:5px;
`;
const PaymentIcon = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Payment = styled.img`
    max-width: 25%;
    padding:5px;
`;
const Nasnav = styled.div`
    margin-top: 20px;
    display: flex;
`;
const NasLogo = styled.img`
    max-width: 25%;
    padding:5px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
      </Left>
      <Center>
      <Yeshtery src={Logo} />
        <Desc>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </Desc>
        <Desc>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia
        </Desc>
        <Desc>
            m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
        </Desc>
        <br />
        <CopyRight>
            © 2021 yeshtery, all rights reserved.
        </CopyRight>
      </Center>
      <Right>
      <Title>Subscribe to our newsletter</Title>
      <Search>
        <Mail>Enter Your Mail</Mail>
        <Button>
          Subscribe
          <Tele src={Send}/>
        </Button>
      </Search>
        <List>
          <ListItem>About Us</ListItem>
          <ListItem>
            <SocialIcon>
              <Icon src={Fac}/>/YESHTERY
            </SocialIcon>
          </ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>
            <SocialIcon>
              <Icon src={Link}/>/YESHTERY
            </SocialIcon>
          </ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem>
            <SocialIcon>
              <Icon src={Inst}/>/YESHTERY
            </SocialIcon>
          </ListItem>
          <ListItem>Terms & Conditions</ListItem>
          <ListItem>
            <SocialIcon>
              <Icon src={Twiter}/>/YESHTERY
            </SocialIcon>
          </ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>

          </ListItem>
          <ListItem>Sell With Us</ListItem>
          <ListItem>

          </ListItem>
          <ListItem>Shipping And Returns</ListItem>
          <ListItem></ListItem>
          <ListItem>
            <PaymentIcon>
              <Payment src={Cash} />
              <Payment src={Visa} />
              <Payment src={Master} />
            </PaymentIcon>
          </ListItem>
          <ListItem>
            <Nasnav>
              Powered By
              <NasLogo src={NasNav} />
            </Nasnav>
          </ListItem>
        </List>
        
      </Right>
    </Container>
  );
};

export default Footer;
