let details = [
    { name:"bala",
        age:20,
        country:"India",
        hobbies:['playing,eating,sleeping']
	},
    {
        name:"snehith",
        age:21,
        country:"canada",
        hobbies:['sleeping, mixing pulihora']
    },
    {
        name:"manish",
        age:20,
        country:"India",
        hobbies:['playing,roaming on roads']
    },
    {
        name:"chandu",
        age:90,
        country:"australia",
        hobbies:['404 erroring,doing everything unusual']
    },
	{
        name:"chaitu",
        age:20,
        country:"india",
        hobbies:['talking on phones']
    },


];
const printArray = () => {
     details.forEach(item=> {
     console.log(item);
    });
    
};
const India = () => {
    details.forEach(item => {
        if (item.country === "India")
            console.log(item);
    });
};
const age = () => {
    details.forEach(item => {
        if (item.age < 30)
            console.log(item);
    });
   
};
