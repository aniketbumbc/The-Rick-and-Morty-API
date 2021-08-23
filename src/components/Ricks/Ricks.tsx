import React, { useState, useEffect } from 'react';
import { RickData, Location, baseUrl } from '../../util';
import Episodes from '../Episodes/Episodes';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const useStyles = makeStyles({
  rickContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  cardMedia: {
    margin: 'auto',
  },
  carContent: {
    textAlign: 'center',
  },
  rickName: {
    display: 'inline',
    margin: '10px',
    padding: '20px',
  },
  residents: {
    margin: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  },
});
const Ricks: React.FC = () => {
  const classes = useStyles();
  const [residents, setResidents] = useState<number>(0);
  const [episodes, setEpisodes] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [dimension, setDimension] = useState<string>('');
  const [rickData, setRickData] = useState<any[]>([]);
  const [showEpisodes, setShowEpisodes] = useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}character`)
      .then((responese) => {
        if (responese.status === 200) {
          setRickData(responese.data.results);
          setError(false);
        }
      })
      .catch((error) => {
        setError(true);
        if (error.message !== 'Network Error') {
          if (error.response.status === 503) {
            alert('Service Unavailable, Please Try Again');
          }
        } else {
          /* Handling error when 404 or others */
          alert('Something Went Wrong');
        }
      });
  }, []);

  /**
   * Method accept episodes array which contain URLS of episodes
   *  Using substring method episode number sets in setEpisodes
   * @param episodes {multiple episodes}
   */

  const getEpisodesNumber = (episodes: string[]): void => {
    const episodesNumber: string[] = [];
    episodes.forEach((episode: string) => {
      episodesNumber.push(episode.substring(episode.lastIndexOf('/') + 1));
    });
    if (episodesNumber && episodesNumber.length) {
      setEpisodes(episodesNumber);
    }
  };

  /**
   * Method set show episodes as true
   * It sets data for Episodes component
   * @param episodes{string}
   */

  const displayEpisodes = (episodes: string[]) => {
    getEpisodesNumber(episodes);
    setShowEpisodes(true);
  };

  /**
   * Method fetch residents from base on location id
   * It also sets residents count and dimension
   * @param id {string}
   */

  const handleResidentsModal = async (id: string): Promise<void> => {
    const response = await fetch(id);
    const locationData: Location = await response.json();
    if (locationData && locationData.residents?.length) {
      setResidents(locationData.residents.length);
      setDimension(locationData.dimension);
    }
    setOpen(true);
  };

  /**
   * Method closed modal
   */

  const handleClose = (): void => {
    setOpen(false);
  };

  /**
   * Method received data from episodes component
   * set setShoEpisodes
   * @param showData {boolean}
   */

  const setEpisodesShowData = (showData: boolean) => {
    setShowEpisodes(showData);
  };

  /**
   * Method showCards is use for display ricks cards on UI
   * @param id {number}
   */

  const showCards = (id: number) => {
    const { image, species, name, location, origin, episode } = rickData[
      id - 1
    ];
    return (
      <Grid item xs={12} sm={6} md={6} lg={3} key={id}>
        <Card>
          <CardMedia
            className={classes.cardMedia}
            image={image}
            style={{ width: '200px', height: '200px' }}
          />
          <CardContent className={classes.carContent}>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              species: {species}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              Origin: {origin.name}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              Location: {location.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size='small'
              color='primary'
              onClick={() => displayEpisodes(episode)}
            >
              Episodes
            </Button>
            <Button
              size='small'
              color='primary'
              onClick={() => handleResidentsModal(location.url)}
            >
              Residents
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>Residents</DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  <Typography component={'span'} variant={'body2'}>
                    Residents : {residents} <br />
                    Dimension : {dimension}
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='primary' autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position='static'>
        <Typography variant='h4' className={classes.header}>
          The Rick and Morty
        </Typography>
      </AppBar>
      {!error && !showEpisodes && rickData && (
        <Grid container spacing={2} className={classes.rickContainer}>
          {rickData && rickData.map((rick: RickData) => showCards(rick.id))}
        </Grid>
      )}
      {!error && showEpisodes && (
        <Episodes
          episodes={episodes}
          setEpisodesShowData={setEpisodesShowData}
        />
      )}

      {error && (
        <Typography
          variant='h3'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          Oops! Something went wrong !!!!!
        </Typography>
      )}
    </>
  );
};

export default Ricks;
