import './Table.css';
import { useEffect, useState } from "react";


function Table(props) {

  // destructuring....
  const { tableTestData, TableDataConfig } = props;
  // state used for sorting.....
  const [sorting, setsorting] = useState({ key: "city", ascending: true });
  const [currentUsers, setCurrentUsers] = useState(tableTestData);


  useEffect(() => {
    const currentUsersData = [...currentUsers];
    const sortedCurrentUsers = currentUsersData.sort((a, b) => {
      if (sorting.key == "person") {
        return a.person.name.localeCompare(b.person.name);
      }
      else {
        return a[sorting.key].localeCompare(b[sorting.key]);
      }
    });
    setCurrentUsers(
      sorting.ascending ? sortedCurrentUsers : sortedCurrentUsers.reverse()
    );
  }, [sorting]);

  // used function for sorting......
  function applySorting(key, ascending) {
    setsorting({ key: key, ascending: ascending });
  }





  return (
    <div>
      <table>
        <thead>
          <tr>
            {TableDataConfig.map((element, index) => {
              return (
                <th key={index}>
                  {/* condition used for show heading...... */}
                  {element.colName === "person" ? "name" :
                  element.colName==="email"?"email Address":
                  element.colName==="joiningDate"? "joining date":
                  element.colName}
                  {element.sortVisible ?
                  // function call for applySorting....
                    <img className="up-down_icon" src='/assest/up-down.png' onClick={() => applySorting(element.colName, !sorting.ascending)} /> : ""}

                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {/* used map for show data about users one by one */}
          {currentUsers.map((ele, index) => {
            return (
              <tr key={index}>
                {TableDataConfig.map((element, index) => {
                  return element.colName === "person" ? (
                    <td key={index} className="name-col"><img className="profile" src={`/assest/${ele.person.avatar}`} />  {ele.person.name}</td>
                  ) :
                  // condition used for show email in link form
                    element.colName === "email" ?
                      (<td key="index" className='email'><a href='#' className='emailclass'>{ele.email}</a></td>):
                  // this is for show other data
                      (<td key={index}>{ele[element.colName]}</td>)
                  }
                )}

              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table; 