i= "123";// set 'i' to a string 
i= 123;// set 'i' to a number
i+= 'some string';// change 'i' from a number to a string 
</script>
document.write('i='+i+', and is a '+typeof i+ )

var person={
    firstName: "John",
    lastName:"Doe",
    id:5566,
    fullname: function(){
        return this.firstName+ ""+ this.lastName
    }
};
console.log(person.fullname());
