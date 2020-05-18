import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';

function ListaDeTarefas(props){
    return (
        <Card elevation={2}>
              <List style={{padding: 0}}>
                {
                  props.tarefas.map((tarefa) => {
                    return (
                      <ListItem dense button 
                      key={tarefa.id} 
                      onClick={() => { props.quandoTarefaForclicada(tarefa)}}>
                        <ListItemIcon>
                          <Checkbox
                            size="small"
                            style={{ color: '#616161' }}
                            edge="start"
                            checked={true}
                            disableRipple
                          />
                        </ListItemIcon>
                        <ListItemText primary={tarefa.descricao} />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Card>
    );
}

export default ListaDeTarefas;