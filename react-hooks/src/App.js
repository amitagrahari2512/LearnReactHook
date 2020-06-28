import React , {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterFour from './components/HooksCounterFour';
import HooksCounterAfterEveryRender from './components/HooksCounterUseEffectAfterEveryRender';
import HooksCounterUseEffectAfterEveryRender from './components/HooksCounterUseEffectAfterEveryRender';
import HooksCounterUseEffectConditionallyRender from './components/HooksCounterUseEffectConditionallyRender';
import HooksCounterUseEffectOnlyOnce from './components/HooksCounterUseEffectOnlyOnce';
import HooksCounterUseEffectCleanUp from './components/HooksCounterUseEffectCleanUp';
import DataFetching from './components/DataFetching';
import DataFetchingPerId from './components/DataFetchingPerId';
import ComponentA from './components/ComponentA';
import CounterOneUseReducerSimpleState from './components/usereducer/CounterOneUseReducerSimpleState';
import CounterOneUseReducerComplexState from './components/usereducer/CounterOneUseReducerComplexState';
import CounterOneUseReducerMultipleReducer from './components/usereducer/CounterOneUseReducerMultipleReducer';
import ComponentAA from './components/usereducer_with_usecontext/ComponentAA';
import ComponentBB from './components/usereducer_with_usecontext/ComponentBB';
import ComponentCC from './components/usereducer_with_usecontext/ComponentCC';
import DataFetchingPerIdUseReducer from './components/usereducer_with_useeffect/DataFetchingPerIdUseReducer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/** Use State Hooks */}
      {/* <HooksCounter/> */}

      {/** Use State Hooks with previous State*/}
      {/* <HooksCounterTwo/> */}

      {/** Use State Hooks with Object */}
      {/* <HooksCounterThree/> */}

      {/** Use State Hooks with Array */}
      {/* <HooksCounterFour/> */}

      {/** Use Effect Hooks after every single render*/}
      {/* <HooksCounterUseEffectAfterEveryRender/> */}

      {/** Use Effect Hooks conditionally render*/}
      {/* <HooksCounterUseEffectConditionallyRender/> */}

      {/** Use Effect Hooks Only Once render*/}
      {/* <HooksCounterUseEffectOnlyOnce/> */}

      {/** Use Effect Hooks CleanUp*/}
      {/* <HooksCounterUseEffectCleanUp/> */}

      {/** useEffect Data fetch  */}
      {/* <DataFetching/> */}

      {/** useEffect Data fetch per id */}
      {/* <DataFetchingPerId/> */}

      {/** Context */}
      {/* <UserContext.Provider value = {'Amit'}>
        <ChannelContext.Provider value ={'Learn react'}>
          <ComponentA/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/** userReducer with simple state*/}
      {/* <CounterOneUseReducerSimpleState/> */}

      {/** userReducer with complex state */}
      {/* <CounterOneUseReducerComplexState/> */}

      {/** userReducer with multi reducer */}
      {/* <CounterOneUseReducerMultipleReducer/> */}

      {/** useReducer with useContext */}
      {/* <CountContext.Provider value = {{countState: count, countDispatch: dispatch}}>
        Count - {count}
        <ComponentAA/>
        <ComponentBB/>
        <ComponentCC/>
      </CountContext.Provider> */}

      {/** useReducer through useEffect */}
      <DataFetchingPerIdUseReducer/>
    </div>
  );
}

export default App;
