import React, {Component} from 'react';
import { 
  IonList, 
  IonItem, 
  //IonButtons, 
  IonButton } from '@ionic/react';
import './ExploreContainer.css';

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

type Props = {};

interface IDefaultState {
  items: any[]
}

const InitialState:IDefaultState = {
  items: []
};

type State = typeof InitialState;

class Cab {

  async commandAdd(e: any) {

    await sleep(1000);

    console.log(e);
  }

}

class ExploreContainer extends Component<Props, State> {

  public readonly state = InitialState;

  commandAdd(e: any) {
    const cab = new Cab();
    return cab.commandAdd(e);
  }

  commandUpdate(e: any) {
    console.log(e);
  }

  commandDelete(e: any) {
    console.log(e);
  }

  componentDidMount() {
    this.queryReadListView()
  }

  queryReadListView() {

    // @TODO use axios, setup redux, etc

    const items = this.state.items;

    const newItems = [
      {
        title: 'whatever note title',
        content: 'whatever this says and then some'
      },
      {
        title: 'whatever note title',
        content: 'whatever this says and then some'
      },
      {
        title: 'new item',
        content: 'new item content'
      }
    ];

    const newItemsList = [ ...newItems, ...items];

    this.setState({ 
      items: newItemsList 
    });
  }

  render() {
    return (
      <div className="container">

        <IonButton onClick={(e) => this.commandAdd(e)}>Add</IonButton>

        <IonList>
          {
            this.state.items && this.state.items.length ?
              this.state.items.map((itemRef, keyRef) => {
                return (
                  <IonItem key={keyRef} className="IonItem--Top">
                    <p title={itemRef.title}>{itemRef.content}</p>

                    <IonButton onClick={(e) => this.commandUpdate(e)}>Update</IonButton>
                    <IonButton onClick={(e) => this.commandDelete(e)}>Delete</IonButton>
                  </IonItem>
                );
              })
            : null
          }
        </IonList>

      </div>
    );

  }
}

export default ExploreContainer;
