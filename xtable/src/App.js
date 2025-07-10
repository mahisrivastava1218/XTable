import {useState} from "react";
function App() {
  const[tableData,setTableData] = useState([

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]);
console.log(tableData);

// once user click it should sort on basis of date desc order but if date is same then it should show latest views acc
 const handleSortByDate=()=>{
  // We use the spread operator to create a copy of the array before sorting — so we don't mutate the original state directly.
  const sortedData = [...tableData].sort((a,b)=>{
    const dateA= new Date(a.date)
    const dateB = new Date(b.date);
    if(dateA.getTime()===dateB.getTime()){
      return b.views-a.views;
    }
  return dateB-dateA;
  })
  setTableData(sortedData);
 }
//  if user click then it should show data acc to dec order views but if views is same then it should dec order date
 const handleSortByViews=()=>{
  const sortedData = [...tableData].sort((a,b)=>{
    const viewsB = b.views
    const viewsA= a.views
    if(viewsA===viewsB){
      return new Date(b.date)-new Date(a.date);
    }
    return viewsB-viewsA;
  })
  setTableData(sortedData);
 }
  return (
   <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        </thead>
        <tbody>
          {Array.isArray(tableData) && tableData.map((item,index)=>(
          <tr>
          <td>{item.date}</td>
          <td>{item.views}</td>
          <td>{item.article}</td>
        </tr>
          ))}
        </tbody>
      </table>
   </div>
  );
}

export default App;
