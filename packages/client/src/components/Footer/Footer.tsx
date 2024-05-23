import { Box, ContactInfo, ItemBox } from "./Footer.style";
import discord from "../../assets/discord.png";

const Footer = () => {
  return (
    <Box>
      <ContactInfo>
        <h3>Contact</h3>
        <ItemBox>
          <a href="https://discord.gg/qTxbxfAD" target="_blank">
            <img src={discord} />
          </a>
        </ItemBox>
      </ContactInfo>
    </Box>
  );
};

export default Footer;
