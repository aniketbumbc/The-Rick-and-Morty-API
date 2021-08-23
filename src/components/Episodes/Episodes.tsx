import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Grid,
  Button,
  Paper,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { baseUrl, Episode } from '../../util';
import './Episodes.css';

const useStyles = makeStyles(() => ({
  paper: {
    padding: '20px',
    textAlign: 'center',
    marginTop: '30px',
    marginLeft: '50px',
    marginRight: '10px',
  },
  backBtn: {
    marginLeft: '50px',
  },
}));

interface EpisodsProps {
  /** model of episodes */
  episodes: string[];
  /**  Call back function  */
  setEpisodesShowData(arg: boolean): void;
}

const Episodes: React.FC<EpisodsProps> = React.memo(
  ({ episodes, setEpisodesShowData }) => {
    const classes = useStyles();

    const [episodesName, setEpisodesName] = useState<any>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const getEpisodesUrl: string = `${baseUrl}episode/${episodes.toString()}`;

    /**
     * Method displays episodes on grid
     * @param episode{string}
     */

    const displayEpisodes = (episode: string) => {
      return (
        <React.Fragment key={episode}>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            <Paper className={classes.paper}>{episode}</Paper>
          </Grid>
        </React.Fragment>
      );
    };

    /**
     * Method fetch episodes and set state setEpisodesName
     */

    const getEpisodesName = useCallback(() => {
      axios
        .get(getEpisodesUrl)
        .then((responese) => {
          if (responese.status === 200) {
            const episodesData: string[] = [];
            if (!responese.data.length) {
              episodesData.push(responese.data.name);
            } else {
              responese.data.forEach((episode: Episode) => {
                episodesData.push(episode.name);
              });
            }
            setLoading(false);
            setEpisodesName(episodesData);
          }
        })
        .catch((error) => {
          if (error.message !== 'Network Error') {
            if (error && error.response && error.response.status === 503) {
              alert('Service Unavailable, Please Try Again');
            }
          } else {
            /* Handling error when 404 or others */
            alert('Something Went Wrong');
          }
        });
    }, [getEpisodesUrl]);

    useEffect(() => {
      getEpisodesName();
    }, [getEpisodesName]);

    return (
      <div>
        <Typography variant='h6' className='title'>
          Name of the episodes character is featured on.
        </Typography>
        <Button
          variant='contained'
          style={{ marginLeft: '50px' }}
          onClick={() => setEpisodesShowData(false)}
        >
          Back
        </Button>
        <div>
          {episodesName && (
            <Grid container spacing={3}>
              <Grid container item xs={12} spacing={3}>
                {episodesName &&
                  episodesName.map((episodes: string) =>
                    displayEpisodes(episodes)
                  )}
              </Grid>
            </Grid>
          )}
          <div className='loader'>
            {loading && !episodesName && <CircularProgress />}
          </div>
        </div>
      </div>
    );
  }
);

export default Episodes;
