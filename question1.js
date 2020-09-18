let Employees = [
    {
    name: "Bala",
    age: 20,
    City: "hyderabad",
    Salary: "25000.00",
  },
  {
    name: "Narasimha",
    age: 23,
    City: "banglore",
    Salary: "1000000.00",
  },
  {
    name: "Karthik",
    age: 21,
    City: "mumbai",
    Salary: "50000.00",
  },
 
];

const display = (basicArray) => {
    let tabledata = "";
  
    basicArray.forEach((Employees, index) => {
      let currentrow = 
       `<tr>
        <th scope="row">${index + 1}</th>
        <td>${Employees.name}</td>
        <td>${Employees.age}</td>
        <td>${Employees.City}</td>
        <td> ${Employees.Salary}</td>
        <td>
      <button class="btn btn-outline-dark" onclick='deleteMyArray(${index})'>delete</button>
      </td>
       </tr>`
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tableData")[0].innerHTML = tabledata;
  }

display(Employees);

const searchArray = (event) => {
    event.preventDefault();
    let id=event.target.name
    // console.log(id)
    let searchValue = document.getElementsByClassName("search")[id].value;

    let newdata = Employees.filter(arr =>  
        (id === "0" ) ? arr.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 :
        arr.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
   );
    display(newdata);  
}

const deleteMyArray = (index) => {
    Employees.splice(index, 1);
    display(Employees);
}