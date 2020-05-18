import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';

import Layout from './components/Layout';
import ListaDeTarefas from './components/ListaDeTarefas';

import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }

}));

function pegarTarefasCadastradas(){
  const headers = { 'Accept': 'application/json' };

      return axios.get(' https://warm-crag-66405.herokuapp.com/tarefas', { headers: headers })
      .then(response => response.data);
};

function salvarNovaTarefa(data){
  const headers = { 'Accept': 'application/json' };

  return axios.post(' https://warm-crag-66405.herokuapp.com/tarefas', data, { headers: headers })
  .then(response => response.data);  
};

export default function App() {
  const classes = useStyles();
  const [novaTarefa, setNovaTarefa] = React.useState('');
  const [tarefas, setTarefas] = React.useState([]);

  React.useEffect(() => {
    pegarListaDeTarefas();
  }, []);

  function pegarListaDeTarefas(){
    pegarTarefasCadastradas().then(listaDeTarefas => setTarefas(listaDeTarefas));
  }

  function cadastrarNovaTarefa(event){
    const ENTER_KEY_CODE = 13;
    if(event.keyCode === ENTER_KEY_CODE){


      const data = { tarefa: { descricao: novaTarefa, finalizada: false } }

      if (novaTarefa === '') {
        return;
      }

      salvarNovaTarefa(data).then(() => {pegarListaDeTarefas(); });

      setNovaTarefa('');
    };

    // function alternarFinalizacaoDaTarefa(tarefa){
    //   //colocar código de requisiçã do backend
    // }
  }

  return (
    <div className={classes.root}>
      <Layout />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3} direction="row" justify="center">
          <Grid item xs={12} sm={8}>
            <Card elevation={2}>
              <CardContent style={{ padding: '10px 20px' }}>
                <InputBase 
                  style={{ color: '#616161', fontWeight: 500 }} 
                  fullWidth 
                  value={novaTarefa}
                  placeholder="Criar uma tarefa..."
                  onKeyUp={cadastrarNovaTarefa}
                  onChange={event => setNovaTarefa(event.target.value)}/>
              </CardContent>
            </Card>
          </Grid>  
        </Grid>     

        <Grid container direction="row" style={{ marginTop: 20 }}>
          <Grid item xs={12} sm={3} xl={2}>
            <ListaDeTarefas tarefas={tarefas} /*quandoTarefaForClicada={alternarFinalizacaoDaTarefa}*/ />
          </Grid>  
        </Grid>     
      </main>
    </div>
  );
}
