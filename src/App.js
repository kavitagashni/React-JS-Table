import React from 'react'
import Table from './Table Component/Table'
import tableTestData from '../src/jsonData/tableTestData.json';
import mainConfigData from "./jsonData/mainConfigData.json";
import configData2 from "./jsonData/configData2.json";
import configData3 from "./jsonData/configData3.json";
import configData4 from "./jsonData/configData4.json";

const App = () => {
  return (
    <div>
      {/* pass data as a props.... */}
      <Table tableTestData ={tableTestData} TableDataConfig={mainConfigData} /><br/>
      <Table tableTestData ={tableTestData} TableDataConfig={configData2} /><br/>
      <Table tableTestData ={tableTestData} TableDataConfig={configData3}/><br/>
      <Table tableTestData ={tableTestData} TableDataConfig={configData4}/><br/>
    </div>
  )
}

export default App;
