let top=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
<body>
<header class = "bg-danger text-white text-center p-4"><h2>My Team</h2></header>

<div class="container">
<div class="row">
`

let bottom = `
</div>
</div>
</body>
</html>
`

function htmlRender (arr) {
    let middle = ``;

    for(i=0;i< arr.length; i++){
        if (arr[i].getRole() == "Engineer") {
        middle += `<div class="col-md-6 col-lg-4">
        <div class="card" style="width: 18rem">
                <h5 class="card-header">${arr[i].name}<br /><br /><i class="fas fa-glasses"></i>${arr[i].getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${arr[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${arr[i].email}"></a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${arr[i].github}"></a></li>
                </ul>
            </div>
            </div>
        `
        }
        else if (arr[i].getRole() == "Manager") {
            middle += ` <div class="col-md-6 col-lg-4">
            <div class="card" style="width: 18rem">
                    <h5 class="card-header">${arr[i].name}<br /><br /><i class="fas fa-mug-hot"></i>${arr[i].getRole()}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${arr[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${arr[i].email}"></a></li>
                        <li class="list-group-item">Office Phone Number: <a href="tel:${arr[i].officenumber}"></a></li>
                    </ul>
                </div>
                </div>
            `
            }
            else {
                middle += ` <div class="col-md-6 col-lg-4">
                <div class="card" style="width: 18rem">
                        <h5 class="card-header">${arr[i].name}<br /><br /><i class="fas fa-user-graduate"></i>${arr[i].getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${arr[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${arr[i].email}"></a></li>
                            <li class="list-group-item">School: ${arr[i].school}</li>
                        </ul>
                    </div>
                    </div>
                `
                }
    }

    return top+middle+bottom;
}

module.exports = htmlRender