let array1 = []

const handleTheCards = (something) => {
  for (let i = 0; i < something.length; i++) {
    if (something[i].officeNumber) {
      array1.push(generateManagerCard(something[i]))
    } else if (something[i].github) {
      array1.push(generateEngineerCard(something[i]))
    } else if (something[i].school) {
      array1.push(generateInternCard(something[i]))
    }
  }
  return array1.join(" ")
}

const generateManagerCard = (something) => {

  return `
  <div class="card">
        <h2>${something.name}</h2>
        <h3>${something.title}</h3>
        <p>Employee ID: ${something.id}</p
        <p><a href="mailto:${something.email}">Email: ${something.email}</a></p>
        <p>Office Number: ${something.officeNumber}</p>
</div>
  `
}
const generateEngineerCard = (something) => {
  return `
  <div class="card">
        <h2>${something.name}</h2>
        <h3>${something.title}</h3>
        <p>Employee ID: ${something.id}</p>
        <p><a href="mailto:${something.email}">Email: ${something.email}</a></p>
        <a href="https://github.com/${something.github}">GitHub Profile: ${something.github}</a>
</div>
  `
}
const generateInternCard = (something) => {
  return `
  <div class="card">
        <h2>${something.name}</h2>
        <h3>${something.title}</h3>
        <p>Employee ID: ${something.id}</p>
        <p><a href="mailto:${something.email}">Email: ${something.email}</a></p>
        <p>School: ${something.school}</p>
</div>
  `
}

const generateHtml = (employeeBucket) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile generator</title>
  </head>
  <body>
      <header>
              <h1>My Team</h1>
      </header>
      <main class="container1">
                  ${handleTheCards(employeeBucket)}
      </main>
  </body>
  </html>
`
}

module.exports = generateHtml










