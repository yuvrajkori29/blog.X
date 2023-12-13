import { Box, styled, Typography, Link, Card, CardContent, CardMedia } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import Userimage from './man_3001764.png';
import Userimage2 from './userimage.png';

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: calc(50vh - 20px); /* Adjusted height to account for padding */
`;

const IconLink = styled(Link)`
  display: inline-block;
  margin: 10px 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const UserImageContainer = styled(CardMedia)`
  height: 140px; /* Set the desired height for the image container */
  ${'' /* width: 20px; */}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserCard = styled(Card)`
  width: 300px;
  margin: 20px 0;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Username = styled(Typography)`
margin-top: 35px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const About = () => {
  const userData = [
    {
      username: 'Anurag Kumar',
      details: 'Passionate about web development and creating user-friendly experiences.',
      image: Userimage2
    },
    {
      username: 'Yuvraj Kori',
      details: 'Dedicated to software engineering and problem-solving through technology.',
      image: Userimage
    },
    {
      username: 'Vaibhav Shakya',
      details: 'Experienced in web-development and innovative solutions.',
      image: Userimage2
    }
  ];

  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Blog.x</Typography>
        
        <Box display="flex" justifyContent="space-around" mt={4}>
          {userData.map((user, index) => (
            <UserCard key={index}>
                <UserImageContainer>
              <CardMedia component="img" height="240" image={user.image} alt={user.username} />
              </UserImageContainer>
              <CardContent>
                <Username variant="h6">{user.username}</Username>
                <Typography variant="body1">{user.details}</Typography>
              </CardContent>
            </UserCard>
          ))}
        </Box>

        <Box display="flex" justifyContent="center" mt={4}>
          <IconLink href="https://github.com/yuvrajkori29/blog.X/commits/main" color="#24292e" target="_blank">
            <GitHub style={{ color: '#24292e' }} />
          </IconLink>
          <IconLink href="#" color="#C13584" target="_blank">
            <Instagram style={{ color: '#C13584' }} />
          </IconLink>
          <IconLink href="mailto:anurag.kum.135@gmail.com?Subject=This is a subject" color="#DD4B39" target="_blank">
            <Email style={{ color: '#DD4B39' }} />
          </IconLink>
        </Box>

      </Wrapper>
    </Box>
  );
};

export default About;
