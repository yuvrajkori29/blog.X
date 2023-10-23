import{Box,Typography,styled} from '@mui/material';

const Image = styled(Box)`
      background: url(https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600) center/55% repeat-x #000;
    
    width: 100%;
    height: 50vh;
    display :flex;
    align-items: center;
    justifie-content: center;
    flex-direction: column;
    `;

    const Heading = styled(Typography)`
    font-size 70px;
    color:#FFFFFF;
    line-height: 1
    `;

    const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
    `

const Banner =() => {
    return(
        //<div>Hello from Banner</div>
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>VAIBHAV</SubHeading>
        </Image>
    )
}

export default Banner;