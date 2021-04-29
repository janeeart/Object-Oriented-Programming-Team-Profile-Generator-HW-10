let top=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>
<header class = "bg-danger text-white text-center p-4"><h2>My Team</h2></header>

<div class="container">
`

let bottom = `</div>
</body>
</html>
`

function htmlRender (arr) {
    let middle = ``;

    for(i=0;i< arr.length; i++){
        middle += `<div class="col-6">
            <div class="card mx-auto" style="width: 18rem">
                <h5 class="card-header">Example<br /><br />${arr[i].name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${arr[i].id}</li>
                    <li class="list-group-item">${arr[i].email}</li>
                    <li class="list-group-item">${arr[i].github}</li>
                    <li class="list-group-item">${arr[i].officenumber}</li>
                    <li class="list-group-item">${arr[i].school}</li>
                </ul>
            </div>
    </div>
        `
    }

    return top+middle+bottom;
}

module.exports = htmlRender