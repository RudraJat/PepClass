let userRole="admin";
let isAuthenticated=true;

if(userRole==="admin" && isAuthenticated){
    console.log("Welcome to the admin dashboard");
}else if(!isAuthenticated){
    console.log("Please log in to continue");
}else if(userRole!=="admin" && isAuthenticated){
    console.log("Access denied")
}