import React, { FC } from 'react';
import { observer } from "mobx-react-lite";
import From from '../Form/From';

const App: FC = () => {
  return (
    <div className='m-8 ml-20 mr-20'>
      <From/>
    </div>
  )
}

export default observer(App);