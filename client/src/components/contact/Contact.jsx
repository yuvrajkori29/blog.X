import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px top -100px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  text-align: center;
  color: #878787;

  & > h3,
  & > h5 {
    margin-top: 50px;
  }

  & .icon-link {
    margin: 0 5px;
    transition: color 0.3s ease-in-out;
  }

  & .icon-link:hover {
    color: #000;
  }
`;

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Typography variant="h5">
          Reach out to me on{' '}
          <Link href="#" target="_blank" className="icon-link">
            <Instagram style={{ color: '#E4405F' }} />
          </Link>{' '}
          or send me an Email{' '}
          <Link
            href="mailto:yuvrajkori07@gmail.com?Subject=This is a subject"
            target="_blank"
            className="icon-link"
          >
            <Email style={{ color: '#EA4335' }} />
          </Link>
          .
        </Typography>
      </Wrapper>
    </Box>
  );
};

export default Contact;
